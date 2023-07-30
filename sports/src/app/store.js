import { configureStore, combineReducers } from '@reduxjs/toolkit';
import allSportsData from '../data';
import { favoriteSportsReducer } from '../features/favoriteSports/favoriteSportsSlice'


const setSearchTerm = (term) => {
  return {
    type: 'searchTerm/setSearchTerm',
    payload: term

  }

};

const clearSearchTerm = () => {
  return {
  type: 'clearSearchTerm/setClearSearchTerm',
  }
};

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

const initialSearchTerm = '';
const searchTermReducer = 
(searchTerm = initialSearchTerm, action) => {
  switch (action.type) { 
    case 'searchTerm/setSearchTerm':
      return action.payload;

    case 'searchTerm/clearSearchTerm':
      return '';

    default:
      return searchTerm

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

