import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchImages = createAsyncThunk("images/fetchImages", async () => {
    const clientID = '0oWmA29p5xRBLsK8-NiXk2FEdmS9_3Viksud3NBiHHw';
    const randomApiUrl = `https://api.unsplash.com/photos/random?count=20&client_id=${clientID}`

    try {
        const request = await fetch(randomApiUrl)
        if (request.ok) {
            const data = await request.json()
            console.log(data)
            return data
        }
    } catch (error) {
        console.log(error)
    }
})

