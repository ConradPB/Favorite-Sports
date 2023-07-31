const initialState = {
  allSports: [],
  favoriteSports: [],
  searchTerm: '',
};


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
  
      case 'favoriteSports/addSport':
      return {
          ...state,
          favoriteSports: [...state.favoriteSports, action.payload]
      }
  
      case 'favoriteSports/removeSport':
      return {
          ...state,
          favoriteSports: state.favoriteSports.filter(e => e.id !== action.payload.id)
      }
  
      default: return state;
    }
    
  
  }