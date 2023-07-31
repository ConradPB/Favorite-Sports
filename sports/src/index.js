import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App.js';
import { store } from './app/store.js';


const render = () => {
  // Pass `state` to `dispatch` props to <App />
  ReactDOM.render(
    <App 
    state={store.getState()}
    dispatch={store.dispatch}
    />,
    document.getElementById('root')
  )
}
store.subscribe(render);