import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse, AxiosError } from 'axios';

import axios from 'utils/axios';
import { Thunk } from 'redux/store';

export interface Login {
  email: string;
  password: string;
}

export interface AuthState {
  accessToken: string | null;
}

const initialState: AuthState = {
  accessToken: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    }
  }
});

export const { setAccessToken } = authSlice.actions;

export default authSlice.reducer;

export const login =
  (data: Login): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    try {
      const response: AxiosResponse = await axios.post('/login', data);
      dispatch(setAccessToken(response.data.token()));
      return response;
    } catch (error) {
      return error as AxiosError;
    }
  };
