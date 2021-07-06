import {MAX_STARS} from './const';

export const getStars = (rating) => (rating / MAX_STARS) * 100;

const SortType = {
  popular: 'Popular',
  pricelowToHight: 'Price: low to high',
  pricehightToLow: 'Price: high to low',
  topRatedFirst: 'Top rated first',
};

export const sortOffers = (types, arr) => {

  switch (types) {
    case SortType.pricelowToHight:
      return arr.slice().sort((a, b) => a.price - b.price);

    case SortType.pricehightToLow:
      return arr.slice().sort((a, b) => b.price - a.price);

    case SortType.sortTopRatedFirst:
      return arr.slice().sort((a, b) => b.rating - a.rating);

    default:
      return arr;
  }
};
