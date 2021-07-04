import {ActionType} from './action';
import offers from 'mocks/offers';
import reviews from 'mocks/reviews';

const DEFAULT_LOCATION = 'Paris';

const initialState = {
  currentLocation: DEFAULT_LOCATION,
  offers,
  reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LOCATION:
      return {
        ...state,
        currentLocation: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
