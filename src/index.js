import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'

const store = createStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
