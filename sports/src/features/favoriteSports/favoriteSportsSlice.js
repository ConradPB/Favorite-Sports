import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

export const favoriteSportsSlice = createSlice({
  name: 'favoriteSports',
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

export const selectFavoriteSports = (state) => state.favoriteSports;

export const selectFilteredFavoriteSports = (state) => {
  const favoriteSports = selectFavoriteSports(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteSports.filter((sport) =>
    sport.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};


export const {
  addSport,
  removeSport,
} = favoriteSportsSlice.actions;

export default favoriteSportsSlice.reducer