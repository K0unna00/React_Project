import { configureStore } from '@reduxjs/toolkit';
import { feedbackSlice } from '../../Pages/HomePage/components/ClientsFeedback/feedbackSlice';
import { loginSlice } from '../../Pages/LoginPage/redux/loginPageSlice';

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    feedback: feedbackSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
