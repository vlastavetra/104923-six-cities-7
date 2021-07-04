import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

const store = createStore(reducer, composeWithDevTools());

const Setting = {
  LOCATIONS: ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'],
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        locations={Setting.LOCATIONS}
        offers={offers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
