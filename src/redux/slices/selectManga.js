import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {api} from "./api";


const initialState = {
    mangas: [],
    load: true,
    page: 1,
    genre: '',
    type: '',
    search: [],
}

export const getMangoList = createAsyncThunk('mangas', async (params) => {
    const {data} = await axios.get(`${api.BaseUrl}top-manga`, {params: params});
    return Array.isArray(data)
            ? {count: data.length, results: data}
            : data;
})

export const getSearch = createAsyncThunk('search', async (search) => {
    const {data} = await axios.get(`${api.BaseUrl}manga/?search=${search}`)
    if (search === ''){
        return []
    } else {
        return data
    }
})

const selectManga = createSlice({
    name: 'selectManga',
    initialState,
    reducers: {
        setPage:(state, action) => {
            state.page = action.payload
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setGenre: (state, action) => {
            state.genre = action.payload
        },
        setType: (state, action) => {
            state.type = action.payload
        }
    },
    extraReducers(builder){
        builder
            .addCase(getMangoList.pending, (state) => {
                state.load = true
            })
            .addCase(getMangoList.fulfilled, (state, action) => {
                state.mangas = action.payload
                state.load = false
            })
            .addCase(getMangoList.rejected, () => {
             
            })
            .addCase(getSearch.fulfilled, (state, action) => {
                state.search = action.payload
            })
    }
})

export default selectManga.reducer;
export const {setPage, setSearch, setGenre, setType} = selectManga.actions;
export const selectSearchResults = state => state.selectManga;
