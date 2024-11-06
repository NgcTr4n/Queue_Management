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
  "level/deleteData",
  async (id: string) => {
    await deleteDoc(doc(db, "level", id));
    return id; // Return the deleted document ID
  }
);

// Thunk to upload data to Firebase (without images)
export const uploadData = createAsyncThunk(
  "level/uploadData",
  async (payload: {
    serialNumber: string;
    customerName: string;
    serviceName: string;
    issueTime: string;
    expirationTime: string;
    statusLevel: string;
    source: string;
  }) => {
    const {
      serialNumber,
      customerName,
      serviceName,
      issueTime,
      expirationTime,
      statusLevel,
      source,
    } = payload;

    // Save data to Firestore
    const docRef = await addDoc(collection(db, "level"), {
      serialNumber,
      customerName,
      serviceName,
      issueTime,
      expirationTime,
      statusLevel,
      source,
    });

    // Return new document data from Firestore
    return {
      id: docRef.id,
      serialNumber,
      customerName,
      serviceName,
      issueTime,
      expirationTime,
      statusLevel,
      source,
    };
  }
);

interface Level {
  id: string;
  serialNumber: string;
  customerName: string;
  serviceName: string;
  issueTime: string;
  expirationTime: string;
  statusLevel: string;
  source: string;
}

interface LevelState {
  level: Level[];
  loading: boolean;
  error: string | null;
  selectedLevel: Level | null; // Add a property to hold the selected level
}

const initialState: LevelState = {
  level: [],
  loading: false,
  error: null,
  selectedLevel: null, // Initialize as null
};

// Thunk to fetch all levels from Firestore
export const fetchLevel = createAsyncThunk<Level[]>(
  "level/fetchLevel",
  async () => {
    const querySnapshot = await getDocs(collection(db, "level"));
    const level: Level[] = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Get Firestore document ID
      ...(doc.data() as Omit<Level, "id">), // Ensure correct data type
    }));
    return level;
  }
);

// Thunk to fetch a single level by ID
export const fetchLevelById = createAsyncThunk<Level, string>(
  "level/fetchLevelById",
  async (id: string) => {
    const docRef = doc(db, "level", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Level; // Return the level with its ID
    } else {
      throw new Error("Level not found");
    }
  }
);
export const updateData = createAsyncThunk(
  "level/updateData",
  async (payload: Level) => {
    const { id, ...updatedData } = payload;
    const docRef = doc(db, "level", id); // Corrected collection name
    await updateDoc(docRef, updatedData);
    return { id, ...updatedData };
  }
);
const levelSlice = createSlice({
  name: "level",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Upload data
      .addCase(uploadData.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadData.fulfilled, (state, action) => {
        state.level.push(action.payload); // Add new level to the state
        state.loading = false;
      })
      .addCase(uploadData.rejected, (state, action) => {
        console.error("Error uploading data:", action.error);
        state.error = action.error.message || "Failed to upload data";
        state.loading = false;
      })

      // Fetch all levels
      .addCase(fetchLevel.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLevel.fulfilled, (state, action) => {
        state.level = action.payload; // Update state with fetched levels
        state.loading = false;
      })
      .addCase(fetchLevel.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch data";
        state.loading = false;
      })

      // Fetch a single level by ID
      .addCase(fetchLevelById.pending, (state) => {
        state.loading = true;
        state.selectedLevel = null; // Reset selected level on new fetch
      })
      .addCase(fetchLevelById.fulfilled, (state, action) => {
        state.selectedLevel = action.payload; // Set the selected level
        state.loading = false;
      })
      .addCase(fetchLevelById.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch level data";
        state.loading = false;
      })

      // Delete level
      .addCase(deleteData.fulfilled, (state, action) => {
        // Remove deleted level from state
        state.level = state.level.filter((item) => item.id !== action.payload);
      })
      .addCase(updateData.pending, (state) => {
        state.loading = true; // Add loading state
      })
      .addCase(updateData.fulfilled, (state, action) => {
        const index = state.level.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.level[index] = action.payload;
        }
        state.loading = false; // Stop loading
      })
      .addCase(updateData.rejected, (state, action) => {
        console.error("Update failed:", action.error.message);
        state.loading = false; // Stop loading
      });
  },
});

export default levelSlice.reducer;
