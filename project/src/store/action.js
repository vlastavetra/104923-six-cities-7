import {adaptedOffers} from 'utils';
export const ActionType = {
  SET_LOCATION: 'main/setLocation',
  SET_SORT: 'main/setSort',
  CHECK_STATUS_LOAD: 'data/checkStatusLoad',
  LOAD_OFFERS: 'data/hotels',
  LOAD_REVIEWS: 'data/comments',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
};

export const ActionCreator = {
  setLocation: (locationName) => ({
    type: ActionType.SET_LOCATION,
    payload: locationName,
  }),
  setSort: (sorting) => ({
    type: ActionType.SET_SORT,
    payload: sorting,
  }),
  checkStatusLoad: (isDataLoaded) => ({
    type: ActionType.CHECK_STATUS_LOAD,
    payload: isDataLoaded,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: adaptedOffers(offers),
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
