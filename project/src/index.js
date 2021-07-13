import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {createAPI} from './api/api';
import App from './components/app/app';
import {loadOffersList} from './store/api-actions';

const api = createAPI();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(loadOffersList());

const Setting = {
  LOCATIONS: ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'],
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        locations={Setting.LOCATIONS}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
