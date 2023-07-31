import React from 'react';

import { AllSports } from '../features/allSports/AllSports';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';

export function App(props) {
  const {state, dispatch} = props;

  const visibleAllSports = getFilteredSports(state.allSports, state.searchTerm);
  const visibleFavoriteSports = getFilteredSports(state.favoriteSports, state.searchTerm);

  return (
    <main>
      <section>
        <SearchTerm
          searchTerm={state.searchTerm}
          dispatch={dispatch}
        />
      </section>
      <section>
        <h2>FavoriteSports</h2>
        
      </section>
      <hr />
      <section>
        <h2>AllSports</h2>
        <AllSports
          allSports={visibleAllSports} 
          dispatch={dispatch}
        />
      </section>
    </main>
  )
}

/* Utility Helpers */

function getFilteredSports(sports, searchTerm) {
  return sports.filter(sport => sport.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

export default App;
