import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App.js';
import { store } from './app/store.js';
import { Provider } from '@reduxjs/toolkit';


const render = () => {
  // Pass `state` to `dispatch` props to <App />
  ReactDOM.render(
    <Provider store={store} >
    <App />
    </Provider>,
    document.getElementById('root')
  )
}
store.subscribe(render);