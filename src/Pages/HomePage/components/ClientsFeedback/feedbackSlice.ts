import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IFeedbackState {
  feedbacks: FeedbackItem[];
}

type FeedbackItem = {
  name: string;
  position: string;
  desc: string;
  img: string;
};

const initialState: IFeedbackState = {
  feedbacks: [
    {
      name: 'Bextiyar',
      position: 'avara',
      desc: 'Ozum avara adimi yazdim divara, dashgin ashkin',
      img: 'avaralarin shekli olmur nacaaaalnik',
    },
    {
      name: 'Bextiyar',
      position: 'avara',
      desc: 'Ozum avara adimi yazdim divara, dashgin ashkin',
      img: 'avaralarin shekli olmur nacaaaalnik',
    },
    {
      name: 'Bextiyar',
      position: 'avara',
      desc: 'Ozum avara adimi yazdim divara, dashgin ashkin',
      img: 'avaralarin shekli olmur nacaaaalnik',
    },
    {
      name: 'Bextiyar',
      position: 'avara',
      desc: 'Ozum avara adimi yazdim divara, dashgin ashkin',
      img: 'avaralarin shekli olmur nacaaaalnik',
    },
    {
      name: 'Bextiyar',
      position: 'avara',
      desc: 'Ozum avara adimi yazdim divara, dashgin ashkin',
      img: 'avaralarin shekli olmur nacaaaalnik',
    },
    {
      name: 'Bextiyar',
      position: 'avara',
      desc: 'Ozum avara adimi yazdim divara, dashgin ashkin',
      img: 'avaralarin shekli olmur nacaaaalnik',
    },
  ],
};

export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    setFeedbacks: (state, action: PayloadAction<FeedbackItem>) => {
      state.feedbacks = [...state.feedbacks, action.payload];
    },
  },
});
