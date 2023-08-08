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

console.log(favoriteSportsSlice.name)

for (const action in favoriteSportsSlice.actions) {
  console.log(action)
}

export const {
  addSport,
  removeSport,
} = favoriteSportsSlice.actions;

console.log(favoriteSportsSlice);
export default favoriteSportsSlice.reducer