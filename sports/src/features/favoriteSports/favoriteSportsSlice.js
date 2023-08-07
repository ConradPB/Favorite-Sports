import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';


const options = {
  name: 'favoriteSports',
  initialState: [],
  reducers: {
    addSport: (state, action) => {
      return [
        ...state,
        {
          id: action.payload.id,
        }
      ]
    },
    removeSport: (state, action) => {
    return [
      ...state.filter(e => e.id !== action.payload.id)
    ]
    }
  },
};

export const favoriteSportsSlice = createSlice(options)