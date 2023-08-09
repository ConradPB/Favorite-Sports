import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App.js';
import store  from '../src/app/store.js';
import { Provider } from 'react-redux';


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