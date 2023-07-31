import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { favoriteSportsReducer } from '../features/favoriteSports/favoriteSportsSlice'
import { searchTermReducer } from '../features/searchTerm/searchTermSlice'
import { allSportsReducer } from '../features//allSports/allSportsSlice'




const reducers = {
  allSports: allSportsReducer,
  searchTerm: searchTermReducer,
  favoriteRecipes: favoriteSportsReducer 
}

const rootReducer = combineReducers(reducers);


export const store = configureStore({
  reducer: rootReducer
});

