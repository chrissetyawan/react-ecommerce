import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store} >
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider >,
  document.getElementById('root')
);