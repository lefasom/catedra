import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./videoSlice";


const store = configureStore({
  reducer: {
    video: videoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

})
export default store