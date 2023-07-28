import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const initialState = {
  allSports: [],
  favoriteSports: [],
  searchTerm: '',
};

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

