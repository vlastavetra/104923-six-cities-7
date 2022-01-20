import {nanoid} from 'nanoid';
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

export const adaptedOffers = (obj) => {

  const arr = obj.data.map((item) =>
    ({
      ...item,
      isFavorite: item.is_favorite,
      isPremium: item.is_premium,
      previewImage: item.preview_image,
      maxAdults: item.max_adults,
      host : {
        id: nanoid(),
        avatarUrl: item.host.avatar_url,
        isPro: item.host.is_pro,
        name: item.host.name,
      },
    }),
  );

  return arr;
};
