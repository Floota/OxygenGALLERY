import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetImagesThunk = createAsyncThunk("images/getImagesFromAPI", async () => {
    const clientID = '0oWmA29p5xRBLsK8-NiXk2FEdmS9_3Viksud3NBiHHw';
    const randomApiUrl = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;
    try {
        const request = await fetch(randomApiUrl)
        if (request.ok) {
            const imagesDataJson = await request.json()
            return imagesDataJson.items
        }
    } catch (error) {
        console.log(error)

    }
})