import { configureStore } from '@reduxjs/toolkit';
import favoriteSportsReducer from '../features/favoriteSports/favoriteSportsSlice';
import searchTermReducer from '../features/searchTerm/searchTermSlice.js';
import allSportsReducer from '../features/allSports/allSportsSlice';

export default configureStore({
  reducer: {
  favoriteSports: favoriteSportsReducer,
  searchTerm: searchTermReducer,
  allSports: allSportsReducer}
});
