import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {api} from "./api";

const initialState = {
    manga: {
        genre: []
    },
    comments: [],
    load: true
}

export const getManga = createAsyncThunk('manga', async (id) => {
    const {data} = await axios.get(`${api.VapiUrl}manga/${id}`)
    return data
})

export const getComments = createAsyncThunk('comments', async (id) => {
    const {data} = await axios.get(`${api.VapiUrl}manga/${id}/comments/`)
    return data;
})

const mangaSlice = createSlice({
    name: 'mangaSlice',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(getManga.pending, (state) => {
                state.load = true
            })
            .addCase(getManga.fulfilled, (state, action) => {
                state.manga = action.payload
                state.load = false
            })
            .addCase(getComments.pending, (state) => {
                state.load = true
            })
            .addCase(getComments.fulfilled, (state, action) => {
                state.comments = action.payload
                state.load = false
            })
    }
})

export default mangaSlice.reducer;
export const mangaSelect = state => state.mangaSlice;