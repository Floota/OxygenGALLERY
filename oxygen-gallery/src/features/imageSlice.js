import { createSlice } from "@reduxjs/toolkit";
import { GetImagesThunk } from "./imagesThunk";

export const imageSlice = createSlice({
    name: "image",
    initialState: {
        data: [],
        status: "idle",
        error: false
    },
    reducers: {
        "AddImage": (state, action) => {
            state.data.push({name: action.payload})
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetImagesThunk.pending, (state, action) => {
                state.status = "pending"
        })
        .addCase(GetImagesThunk.fulfilled, (state, action) => { 
            state.status = "fulfilled"
            state.data = action.payload
        })
        .addCase(GetImagesThunk.rejected, (state, action) => { 
            state.error = true
            state.status = "rejected"
        })
    }
})
export const getImageData = (state) => state.image.data
export const getImageStatus = (state) => state.image.status
export const getImageError= (state) => state.image.error

export const { AddImage } = imageSlice.actions