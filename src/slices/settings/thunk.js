import {
  createAsyncThunk
} from "@reduxjs/toolkit";
import * as api from "../../helpers/api";

export const getSetting = createAsyncThunk("setting", async (_blank, {
  rejectWithValue
}) => {
  try {
    return await api.getSetting();
  } catch (error) {
    return rejectWithValue(error);
  }
});