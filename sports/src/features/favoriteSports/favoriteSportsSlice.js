export const addSport = (sport) => {
    return {
      type: 'favoriteSports/addSport',
      payload: sport
    }
  };
  
export const removeSport = (sport) => {
    return {
      type: 'favoriteSports/removeSport',
      payload: sport
    }
  }


  const initialFavoriteSports = [];
  export const favoriteSportsReducer = 
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