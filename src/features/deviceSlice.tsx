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
  "device/deleteData",
  async (id: string) => {
    await deleteDoc(doc(db, "device", id));
    return id; // Return the deleted document ID
  }
);

// Thunk to upload data to Firebase (without images)
export const uploadData = createAsyncThunk(
  "device/uploadData",
  async (payload: {
    deviceCode: string;
    deviceName: string;
    ipAddress: string;
    serviceName: string;
    deviceType: string;
    accountName: string;
    status: string;
    connection: string;
    password: string;
  }) => {
    const {
      deviceCode,
      deviceName,
      ipAddress,
      serviceName,
      deviceType,
      accountName,
      status,
      connection,
      password,
    } = payload;

    // Save data to Firestore
    const docRef = await addDoc(collection(db, "device"), {
      deviceCode,
      deviceName,
      ipAddress,
      serviceName,
      deviceType,
      accountName,
      status,
      connection,
      password,
    });

    // Return new document data from Firestore
    return {
      id: docRef.id,
      deviceCode,
      deviceName,
      ipAddress,
      serviceName,
      deviceType,
      accountName,
      status,
      connection,
      password,
    };
  }
);

interface Device {
  id: string;
  deviceCode: string;
  deviceName: string;
  ipAddress: string;
  serviceName: string;
  deviceType: string;
  accountName: string;
  status: string;
  connection: string;
  password: string;
}

interface DeviceState {
  device: Device[];
  loading: boolean;
  error: string | null;
  selectedDevice: Device | null; // Add a property to hold the selected device
}

const initialState: DeviceState = {
  device: [],
  loading: false,
  error: null,
  selectedDevice: null, // Initialize as null
};

// Thunk to fetch all devices from Firestore
export const fetchDevice = createAsyncThunk<Device[]>(
  "device/fetchDevice",
  async () => {
    const querySnapshot = await getDocs(collection(db, "device"));
    const device: Device[] = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Get Firestore document ID
      ...(doc.data() as Omit<Device, "id">), // Ensure correct data type
    }));
    return device;
  }
);

// Thunk to fetch a single device by ID
export const fetchDeviceById = createAsyncThunk<Device, string>(
  "device/fetchDeviceById",
  async (id: string) => {
    const docRef = doc(db, "device", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Device; // Return the device with its ID
    } else {
      throw new Error("Device not found");
    }
  }
);
export const updateData = createAsyncThunk(
  "device/updateData",
  async (payload: Device) => {
    const { id, ...updatedData } = payload;
    const docRef = doc(db, "device", id); // Corrected collection name
    await updateDoc(docRef, updatedData);
    return { id, ...updatedData };
  }
);
const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Upload data
      .addCase(uploadData.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadData.fulfilled, (state, action) => {
        state.device.push(action.payload); // Add new device to the state
        state.loading = false;
      })
      .addCase(uploadData.rejected, (state, action) => {
        console.error("Error uploading data:", action.error);
        state.error = action.error.message || "Failed to upload data";
        state.loading = false;
      })

      // Fetch all devices
      .addCase(fetchDevice.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDevice.fulfilled, (state, action) => {
        state.device = action.payload; // Update state with fetched devices
        state.loading = false;
      })
      .addCase(fetchDevice.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch data";
        state.loading = false;
      })

      // Fetch a single device by ID
      .addCase(fetchDeviceById.pending, (state) => {
        state.loading = true;
        state.selectedDevice = null; // Reset selected device on new fetch
      })
      .addCase(fetchDeviceById.fulfilled, (state, action) => {
        state.selectedDevice = action.payload; // Set the selected device
        state.loading = false;
      })
      .addCase(fetchDeviceById.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch device data";
        state.loading = false;
      })

      // Delete device
      .addCase(deleteData.fulfilled, (state, action) => {
        // Remove deleted device from state
        state.device = state.device.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(updateData.pending, (state) => {
        state.loading = true; // Add loading state
      })
      .addCase(updateData.fulfilled, (state, action) => {
        const index = state.device.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.device[index] = action.payload;
        }
        state.loading = false; // Stop loading
      })
      .addCase(updateData.rejected, (state, action) => {
        console.error("Update failed:", action.error.message);
        state.loading = false; // Stop loading
      });
  },
});

export default deviceSlice.reducer;
