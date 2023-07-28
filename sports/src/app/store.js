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

