import { configureStore, combineReducers } from '@reduxjs/toolkit';
import allSportsData from '../data';
import { favoriteSportsReducer } from '../features/favoriteSports/favoriteSportsSlice'
import { searchTermReducer } from '../features/searchTerm/searchTermSlice'



const loadData = () => {
  return {
    type: 'allSports/loadData',
    payload: allSportsData
  }
};



const initialAllSports = [];
const allSportsReducer = 
(allSports = initialAllSports, action) => {
  switch (action.type) {
    case 'allSports/loadData':
      return action.payload
        default: return allSports;

  }
}



const reducers = {
  allSports: allSportsReducer,
  searchTerm: searchTermReducer,
  favoriteRecipes: favoriteSportsReducer 
}

const rootReducer = combineReducers(reducers);


export const store = configureStore({
  reducer: rootReducer
});

