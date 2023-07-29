import { configureStore } from '@reduxjs/toolkit';
import allSportsData from '../data';



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

const addSport = (sport) => {
  return {
    type: 'favoriteSports/addSport',
    payload: sport
  }
};

const removeSport = (sport) => {
  return {
    type: 'favoriteSports/removeSport',
    payload: sport
  }
}

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

const initialFavoriteSports = [];
const favoriteSportsReducer = 
(favoriteSports = initialFavoriteSports, action) => {
  switch (action.type) {
    case 'favoriteSports/addSport':
      return [...favoriteSports, 
        action.payload];

    case 'favoriteSports/removeSport':
      return [
        ...favoriteSports.filter(e => e.id !== action.payload.id)
      ]

        default: return favoriteSports

  }
}


export const store = configureStore({
  reducer: sportsReducer
});

