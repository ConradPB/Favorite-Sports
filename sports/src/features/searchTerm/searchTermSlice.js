const initialState = ''

const searchTermReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'searchTerm/setSearchTerm':
      return action.payload;
    case 'searchTerm/clearSearchTerm':
      return '';
    default:
      return state;
  }
}

export function setSearchTerm(term) {
  return {
    type: 'searchTerm/setSearchTerm',
    payload: term
  }
}