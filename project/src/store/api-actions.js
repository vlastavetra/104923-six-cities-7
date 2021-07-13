import {ActionCreator} from './action';
import {APIRoute} from 'const';

export const loadOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then((offers) => dispatch(ActionCreator.loadOffers(offers)))
);
