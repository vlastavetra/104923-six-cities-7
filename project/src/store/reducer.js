import {ActionType} from './action';
import {AuthorizationStatus} from 'const';

const DEFAULT_LOCATION = 'Paris';
const DEFAULT_SORTING = 'Popular';

const initialState = {
  currentLocation: DEFAULT_LOCATION,
  currentSorting: DEFAULT_SORTING,
  offers: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
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
    case ActionType.CHECK_STATUS_LOAD:
      return {
        ...state,
        isDataLoaded: true,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    default:
      return state;
  }
};

export {reducer};
