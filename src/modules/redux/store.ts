import { blogPageSlice } from '../../Pages/BlogPage/redux/blogPageSlice';
import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from '../../Pages/LoginPage/redux/loginPageSlice';

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    blog: blogPageSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
