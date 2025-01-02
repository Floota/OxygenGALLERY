import { createSlice } from '@reduxjs/toolkit';
import { fetchImages } from './imagesThunk.js';

const imageSlice = createSlice({
    name: 'image',
    initialState: {
        images: [], 
        status: 'idle', 
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchImages.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchImages.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.images = action.payload; 
            })
            .addCase(fetchImages.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            });
    },
});

export const selectImages = (state) => state.image.images;
export const selectImageStatus = (state) => state.image.status;
export const selectImageError = (state) => state.image.error;

export default imageSlice.reducer;