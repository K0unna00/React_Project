import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type BlogItem = {
  title: string;
  author: string;
  date: string;
  commentCount: number;
  text: string;
};

export interface IBlogState {
  blogs: BlogItem[];
}

const initialState: IBlogState = {
  blogs: [],
};

export const blogPageSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlog: (state, action: PayloadAction<BlogItem>) => {
      state.blogs = [...state.blogs, action.payload];
    },
  },
});
