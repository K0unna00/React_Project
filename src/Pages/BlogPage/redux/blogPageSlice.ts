import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type BlogItem = {
  id: number;
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
  name: 'blog',
  initialState,
  reducers: {
    setBlog: (state, action: PayloadAction<BlogItem[]>) => {
      state.blogs = action.payload;
    },
  },
});
