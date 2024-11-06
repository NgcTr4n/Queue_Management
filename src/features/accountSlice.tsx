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
  "account/deleteData",
  async (id: string) => {
    await deleteDoc(doc(db, "account", id));
    return id; // Return the deleted document ID
  }
);

// Thunk to upload data to Firebase (without images)
export const uploadData = createAsyncThunk(
  "account/uploadData",
  async (payload: {
    accountName: string;
    fullName: string;
    phoneNumber: string;
    email: string;
    roleName: string;
    password: string;
    rePassword: string;
    status: string;
  }) => {
    const {
      accountName,
      fullName,
      phoneNumber,
      email,
      roleName,
      status,
      rePassword,
      password,
    } = payload;

    // Save data to Firestore
    const docRef = await addDoc(collection(db, "account"), {
      accountName,
      fullName,
      phoneNumber,
      email,
      roleName,
      password,
      rePassword,
      status,
    });

    // Return new document data from Firestore
    return {
      id: docRef.id,
      accountName,
      fullName,
      phoneNumber,
      email,
      roleName,
      status,
      password,
      rePassword,
    };
  }
);

interface Account {
  id: string;
  accountName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  roleName: string;
  password: string;
  rePassword: string;
  status: string;
}

interface AccountState {
  account: Account[];
  loading: boolean;
  error: string | null;
  selectedAccount: Account | null; // Add a property to hold the selected account
}

const initialState: AccountState = {
  account: [],
  loading: false,
  error: null,
  selectedAccount: null, // Initialize as null
};

// Thunk to fetch all accounts from Firestore
export const fetchAccount = createAsyncThunk<Account[]>(
  "account/fetchAccount",
  async () => {
    const querySnapshot = await getDocs(collection(db, "account"));
    const account: Account[] = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Get Firestore document ID
      ...(doc.data() as Omit<Account, "id">), // Ensure correct data type
    }));

    return account;
  }
);

// Thunk to fetch a single account by email
export const fetchAccountByEmail = createAsyncThunk<Account, string>(
  "account/fetchAccountByEmail",
  async (email: string) => {
    const querySnapshot = await getDocs(collection(db, "account"));
    const accountDoc = querySnapshot.docs.find((doc) => {
      const data = doc.data() as Account; // Cast document data
      return data.email === email; // Check if email matches
    });

    if (accountDoc) {
      return { id: accountDoc.id, ...accountDoc.data() } as Account; // Return account with ID
    } else {
      throw new Error("Account not found");
    }
  }
);

export const updateData = createAsyncThunk(
  "account/updateData",
  async (payload: Account) => {
    const { id, ...updatedData } = payload;
    const docRef = doc(db, "account", id); // Corrected collection name
    await updateDoc(docRef, updatedData);
    return { id, ...updatedData };
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Upload data
      .addCase(uploadData.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadData.fulfilled, (state, action) => {
        state.account.push(action.payload); // Add new account to the state
        state.loading = false;
      })
      .addCase(uploadData.rejected, (state, action) => {
        console.error("Error uploading data:", action.error);
        state.loading = false;
        state.error = action.error.message || "Error uploading data";
      })

      // Fetch all accounts
      .addCase(fetchAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAccount.fulfilled, (state, action) => {
        state.account = action.payload; // Set accounts in state
        state.loading = false;
      })
      .addCase(fetchAccount.rejected, (state, action) => {
        console.error("Error fetching accounts:", action.error);
        state.loading = false;
        state.error = action.error.message || "Error fetching accounts";
      })

      // Fetch account by email
      .addCase(fetchAccountByEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAccountByEmail.fulfilled, (state, action) => {
        state.selectedAccount = action.payload; // Store the fetched account
        state.loading = false;
      })
      .addCase(fetchAccountByEmail.rejected, (state, action) => {
        console.error("Error fetching account:", action.error);
        state.loading = false;
        state.error = action.error.message || "Error fetching account";
      })

      // Delete data
      .addCase(deleteData.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.account = state.account.filter(
          (acc) => acc.id !== action.payload
        ); // Remove deleted account from state
        state.loading = false;
      })
      .addCase(deleteData.rejected, (state, action) => {
        console.error("Error deleting account:", action.error);
        state.loading = false;
        state.error = action.error.message || "Error deleting account";
      })

      // Update data
      .addCase(updateData.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateData.fulfilled, (state, action) => {
        const index = state.account.findIndex(
          (acc) => acc.id === action.payload.id
        );
        if (index !== -1) {
          state.account[index] = action.payload; // Update the account in the state
        }
        state.loading = false;
      })
      .addCase(updateData.rejected, (state, action) => {
        console.error("Error updating account:", action.error);
        state.loading = false;
        state.error = action.error.message || "Error updating account";
      });
  },
});

// Export actions and reducer
export const {} = accountSlice.actions;
export default accountSlice.reducer;
