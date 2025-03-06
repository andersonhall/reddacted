import { configureStore } from "@reduxjs/toolkit";
// import reducers
import postsReducer from "../components/Posts/postsSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
