import { configureStore } from "@reduxjs/toolkit";
import { imageSlice } from "../features/imageSlice";



export const store = configureStore({
    reducer: {
        images: imageSlice.reducer
    }
})