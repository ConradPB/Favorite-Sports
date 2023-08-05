import allSportsData from "../../data";
import { selectSearchTerm } from '../searchTerm/searchTermSlice';

export const loadData = () => {
  return {
    type: 'allSports/loadData',
    payload: allSportsData
  }
}

const initialState = [];
export const allSportsReducer = (allSports = initialState, action) => {
  switch (action.type) {
    case 'allSports/loadData':
      return action.payload;
    case 'favoriteSports/addSport':
      return allSports.filter(sport => sport.id !== action.payload.id);
    case 'favoriteSports/removeSport':
      return [...allSports, action.payload]
    default:
      return allSports;
  }
}


