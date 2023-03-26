import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./api";
import axios from "axios";
const initialState = {
  username: null,
  nickname: null,
  image_file: null,
};

export const registerAsyncAction = createAsyncThunk(
	'handleSubmit',
	async function (user, { rejectWithValue, dispatch }) {
		const {data} = await axios.post(`${api.AuthUrl}signup/`, user)

    alert(data === "успешно" );
	}
)

export const loginAsyncAction  = createAsyncThunk('loginAsyncAction ', async ({user , isRemember = false}) => {
  const {data} = await axios.post(`${api.AuthUrl}signin/`, user);
  
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.username = action.payload.username;
      state.nickname = action.payload.nickname;
      state.image_file = action.payload.image_file;
    },
    
  },
});

export const authSelect = state => state.authSlice
export default userSlice.reducer;