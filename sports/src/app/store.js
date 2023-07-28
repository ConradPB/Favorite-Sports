import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const initialState = {
  allSports: [],
  favoriteSports: [],
  searchTerm: '',
};

