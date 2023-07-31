import allSportsData from "../../data";

export const loadData = () => {
    return {
      type: 'allSports/loadData',
      payload: allSportsData
    }
  };
  
  
  
const initialAllSports = [];
export const allSportsReducer = 
  (allSports = initialAllSports, action) => {
    switch (action.type) {
      case 'allSports/loadData':
        return action.payload
          default: return allSports;
  
    }
  }