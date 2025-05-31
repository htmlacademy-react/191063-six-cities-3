import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  extra: AxiosInstance;
}>();

export default createAppAsyncThunk ;
