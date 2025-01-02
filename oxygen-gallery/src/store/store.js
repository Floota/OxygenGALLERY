import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../features/imageSlice';  // Default import of the reducer

export const store = configureStore({
    reducer: {
        image: imageReducer,  // Use the imported image reducer here
    },
});