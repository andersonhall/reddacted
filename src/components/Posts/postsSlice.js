import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    searchPosts: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const selectPosts = (state) => state.posts;
export const { searchPosts } = postsSlice.actions;
export default postsSlice.reducer;
