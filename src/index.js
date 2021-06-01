import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from '../reducers/index'
import {createStore} from 'redux';
import {Provider} from 'react-redux'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={reducer}>
    <App />
  </Provider>,
  document.getElementById('root')
);

