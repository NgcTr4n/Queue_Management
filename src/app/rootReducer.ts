import { combineReducers } from "@reduxjs/toolkit";
import deviceReducer from "../features/deviceSlice";
import serviceReducer from "../features/serviceSlice";
import levelReducer from "../features/levelSlice";
import roleReducer from "../features/roleSlice";
import accountReducer from "../features/accountSlice";

const rootReducer = combineReducers({
  device: deviceReducer,
  service: serviceReducer,
  level: levelReducer,
  role: roleReducer,
  account: accountReducer,
});

export default rootReducer;
