import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ILoginState {
  email: string;
  password: string;
  isSigned: boolean;
}

const initialState = {
  email: '',
  password: '',
  isSigned: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginUser: (state, action: PayloadAction<{ email: string; password: string }>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isSigned = true;
    },
  },
});
