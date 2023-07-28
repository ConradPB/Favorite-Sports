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

const removeSport = (sport) => {
  return {
    type: 'favoriteSports/removeSport',
    payload: sport
  }
}

const sportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'allSports/loadSport': 
    return {
      ...state,
      allSports: action.payload
    }

    case 'searchTerm/clearSearchTerm':
    return {
        ...state,
        searchTerm: ''
    }

    case 'searchTerm/setSearchTerm':
    return {
        ...state,
        searchTerm: action.payload
    }

    
    
  

}
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

