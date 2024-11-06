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
  "service/deleteData",
  async (id: string) => {
    await deleteDoc(doc(db, "service", id));
    return id; // Return the deleted document ID
  }
);

// Thunk to upload data to Firebase (without images)
export const uploadData = createAsyncThunk(
  "service/uploadData",
  async (payload: {
    serviceCode: string;
    serviceName: string;
    serviceDescribe: string;
    status: string;
    numberRule: {
      autoIncrement: boolean;
      prefix: string;
      suffix: string;
      resetDaily: boolean;
      rangeStart: string;
      rangeEnd: string;
    };
  }) => {
    const { serviceCode, serviceName, serviceDescribe, status, numberRule } =
      payload;

    // Save data to Firestore
    const docRef = await addDoc(collection(db, "service"), {
      serviceCode,
      serviceName,
      serviceDescribe,
      status,
      numberRule,
    });

    // Return new document data from Firestore
    return {
      id: docRef.id,
      serviceCode,
      serviceName,
      serviceDescribe,
      status,
      numberRule,
    };
  }
);

interface Service {
  id: string;
  serviceCode: string;
  serviceName: string;
  serviceDescribe: string;
  status: string;
  numberRule: {
    autoIncrement: boolean;
    prefix: string;
    suffix: string;
    resetDaily: boolean;
    rangeStart: string;
    rangeEnd: string;
  };
}

interface ServiceState {
  service: Service[];
  loading: boolean;
  error: string | null;
  selectedService: Service | null; // Add a property to hold the selected service
}

const initialState: ServiceState = {
  service: [],
  loading: false,
  error: null,
  selectedService: null, // Initialize as null
};

// Thunk to fetch all services from Firestore
export const fetchService = createAsyncThunk<Service[]>(
  "service/fetchService",
  async () => {
    const querySnapshot = await getDocs(collection(db, "service"));
    const service: Service[] = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Get Firestore document ID
      ...(doc.data() as Omit<Service, "id">), // Ensure correct data type
    }));
    return service;
  }
);

// Thunk to fetch a single service by ID
export const fetchServiceById = createAsyncThunk<Service, string>(
  "service/fetchServiceById",
  async (id: string) => {
    const docRef = doc(db, "service", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Service; // Return the service with its ID
    } else {
      throw new Error("Service not found");
    }
  }
);
export const updateData = createAsyncThunk(
  "service/updateData",
  async (payload: Service) => {
    const { id, ...updatedData } = payload;
    const docRef = doc(db, "service", id); // Corrected collection name
    await updateDoc(docRef, updatedData);
    return { id, ...updatedData };
  }
);
const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Upload data
      .addCase(uploadData.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadData.fulfilled, (state, action) => {
        state.service.push(action.payload); // Add new service to the state
        state.loading = false;
      })
      .addCase(uploadData.rejected, (state, action) => {
        console.error("Error uploading data:", action.error);
        state.error = action.error.message || "Failed to upload data";
        state.loading = false;
      })

      // Fetch all services
      .addCase(fetchService.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchService.fulfilled, (state, action) => {
        state.service = action.payload; // Update state with fetched services
        state.loading = false;
      })
      .addCase(fetchService.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch data";
        state.loading = false;
      })

      // Fetch a single service by ID
      .addCase(fetchServiceById.pending, (state) => {
        state.loading = true;
        state.selectedService = null; // Reset selected service on new fetch
      })
      .addCase(fetchServiceById.fulfilled, (state, action) => {
        state.selectedService = action.payload; // Set the selected service
        state.loading = false;
      })
      .addCase(fetchServiceById.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch service data";
        state.loading = false;
      })

      // Delete service
      .addCase(deleteData.fulfilled, (state, action) => {
        // Remove deleted service from state
        state.service = state.service.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(updateData.pending, (state) => {
        state.loading = true; // Add loading state
      })
      .addCase(updateData.fulfilled, (state, action) => {
        const index = state.service.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.service[index] = action.payload;
        }
        state.loading = false; // Stop loading
      })
      .addCase(updateData.rejected, (state, action) => {
        console.error("Update failed:", action.error.message);
        state.loading = false; // Stop loading
      });
  },
});

export default serviceSlice.reducer;
