import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './app/store.js'
import { App } from './app/App.js';
// Import 'store' here.


const render = () => {
  // Pass `state` and `dispatch` props to <App />
  ReactDOM.render(
    <App 
    state={store.getState()}
    dispatch={store.dispatch}

    />,
    document.getElementById('root')
  )
}
store.subscribe(render);