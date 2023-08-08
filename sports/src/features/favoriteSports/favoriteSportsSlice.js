import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

export const favoriteSportsSlice = createSlice({
  name: "favoriteSports",
  initialState: [],
  reducers: {
    addSport: (state, action) => {
      state.push(action.payload);
    },
    removeSport: (state, action) => {
      return state.filter(sport => sport.id !== action.payload.id)
    },
  },
});