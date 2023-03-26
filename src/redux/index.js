import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import selectManga from "./slices/selectManga";
import genresSlice from "./slices/genreSlice";
import mangaSlice from "./slices/mangaSlice";

export const store = configureStore ({
  reducer: {
    selectManga,
    userSlice,
    genresSlice,
    mangaSlice
  }
})