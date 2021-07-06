import {ActionType} from './action';
import offers from 'mocks/offers';
import reviews from 'mocks/reviews';

const DEFAULT_LOCATION = 'Paris';
const DEFAULT_SORTING = 'Popular';

const initialState = {
  currentLocation: DEFAULT_LOCATION,
  currentSorting: DEFAULT_SORTING,
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
    case ActionType.SET_SORT:
      return {
        ...state,
        currentSorting: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
