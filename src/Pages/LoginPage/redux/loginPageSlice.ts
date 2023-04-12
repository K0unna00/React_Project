import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../../models/user';

export interface ILoginState {
  email: string;
  password: string;
  isSigned: boolean;
}

const initialState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginUser: (state, action: PayloadAction<User>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    // logIn: (state, action: PayloadAction<LoginUserPayload>) => {
    //   state.userInfo = action.payload.user;
    // },
    // logOut: (state) => {
    //   state.userInfo = undefined;
    // },
  },
});
