// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../services/firebase"; // Ensure this imports your Firestore configuration

// Thunk to delete data
export const deleteData = createAsyncThunk(
  "role/deleteData",
  async (id: string) => {
    await deleteDoc(doc(db, "role", id));
    return id; // Return the deleted document ID
  }
);

// Thunk to upload data to Firebase (without images)
export const uploadData = createAsyncThunk(
  "role/uploadData",
  async (payload: {
    roleName: string;
    userCount: number;
    roleDescribe: string;
    permissionsA: { permissionName: string }[];
    permissionsB: { permissionName: string }[];
    permissionsC: { permissionName: string }[];
    permissionsD: { permissionName: string }[];
    permissionsE: { permissionName: string }[];
    permissionsF: { permissionName: string }[];
    permissionsG: { permissionName: string }[];
  }) => {
    const {
      roleName,
      userCount,
      roleDescribe,
      permissionsA,
      permissionsB,
      permissionsC,
      permissionsD,
      permissionsE,
      permissionsF,
      permissionsG,
    } = payload;

    // Save data to Firestore
    const docRef = await addDoc(collection(db, "role"), {
      roleName,
      userCount,
      roleDescribe,
      permissionsA,
      permissionsB,
      permissionsC,
      permissionsD,
      permissionsE,
      permissionsF,
      permissionsG,
    });

    // Return new document data from Firestore
    return {
      id: docRef.id,
      roleName,
      userCount,
      roleDescribe,
      permissionsA,
      permissionsB,
      permissionsC,
      permissionsD,
      permissionsE,
      permissionsF,
      permissionsG,
    };
  }
);

interface Role {
  id: string;
  roleName: string;
  userCount: number;
  roleDescribe: string;
  permissionsA: { permissionName: string }[];
  permissionsB: { permissionName: string }[];
  permissionsC: { permissionName: string }[];
  permissionsD: { permissionName: string }[];
  permissionsE: { permissionName: string }[];
  permissionsF: { permissionName: string }[];
  permissionsG: { permissionName: string }[];
}

interface RoleState {
  role: Role[];
  loading: boolean;
  error: string | null;
  selectedRole: Role | null; // Add a property to hold the selected role
}

const initialState: RoleState = {
  role: [],
  loading: false,
  error: null,
  selectedRole: null, // Initialize as null
};

// Thunk to fetch all roles from Firestore
export const fetchRole = createAsyncThunk<Role[]>(
  "role/fetchRole",
  async () => {
    const querySnapshot = await getDocs(collection(db, "role"));
    const role: Role[] = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Get Firestore document ID
      ...(doc.data() as Omit<Role, "id">), // Ensure correct data type
    }));

    return role;
  }
);

// Thunk to fetch a single role by ID
export const fetchRoleById = createAsyncThunk<Role, string>(
  "role/fetchRoleById",
  async (id: string) => {
    const docRef = doc(db, "role", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Role; // Return the role with its ID
    } else {
      throw new Error("Role not found");
    }
  }
);
export const updateData = createAsyncThunk(
  "role/updateData",
  async (payload: Role) => {
    const { id, ...updatedData } = payload;
    const docRef = doc(db, "role", id); // Corrected collection name
    await updateDoc(docRef, updatedData);
    return { id, ...updatedData };
  }
);
const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Upload data
      .addCase(uploadData.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadData.fulfilled, (state, action) => {
        state.role.push(action.payload); // Add new role to the state
        state.loading = false;
      })
      .addCase(uploadData.rejected, (state, action) => {
        console.error("Error uploading data:", action.error);
        state.error = action.error.message || "Failed to upload data";
        state.loading = false;
      })

      // Fetch all roles
      .addCase(fetchRole.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRole.fulfilled, (state, action) => {
        state.role = action.payload; // Update state with fetched roles
        state.loading = false;
      })
      .addCase(fetchRole.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch data";
        state.loading = false;
      })

      // Fetch a single role by ID
      .addCase(fetchRoleById.pending, (state) => {
        state.loading = true;
        state.selectedRole = null; // Reset selected role on new fetch
      })
      .addCase(fetchRoleById.fulfilled, (state, action) => {
        state.selectedRole = action.payload; // Set the selected role
        state.loading = false;
      })
      .addCase(fetchRoleById.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch role data";
        state.loading = false;
      })

      // Delete role
      .addCase(deleteData.fulfilled, (state, action) => {
        // Remove deleted role from state
        state.role = state.role.filter((item) => item.id !== action.payload);
      })
      .addCase(updateData.pending, (state) => {
        state.loading = true; // Add loading state
      })
      .addCase(updateData.fulfilled, (state, action) => {
        const index = state.role.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.role[index] = action.payload;
        }
        state.loading = false; // Stop loading
      })
      .addCase(updateData.rejected, (state, action) => {
        console.error("Update failed:", action.error.message);
        state.loading = false; // Stop loading
      });
  },
});

export default roleSlice.reducer;
