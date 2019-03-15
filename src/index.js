import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import reducers from './User/store/reducers';
import {connect, Provider} from 'react-redux';
import uuidv4 from 'uuid/v4';

const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result
};

const userUuidGenerator = store => next => action => {
  if (action.type === 'ADD_USER') {
    console.log('add user middleware');
    action.user = {
      ...action.user,
      registered: new Date(),
      id: uuidv4(),
      friends: []
    };
  }
  return next(action);
};

const store = createStore(
  reducers,
  applyMiddleware(userUuidGenerator, logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
