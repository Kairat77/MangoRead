import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "./api";
import axios from "axios";

const initialState = {
    genres: []
}

export const getGenres = createAsyncThunk('genres', async (params) => {
    const {data} = await axios.get(`${api.VapiUrl}genre/`, {params: params})
    return data
})

const genresSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload
            })
    }
})

export default genresSlice.reducer;
export const genresSelect = state => state.genresSlice;