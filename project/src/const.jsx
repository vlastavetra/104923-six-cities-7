export const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id',
};

export const MAX_STARS = 5;

export const PlaceType = {
  apartment: 'Apartment',
  room: 'Room',
  house: 'House',
  hotel: 'Hotel',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  OFFERS: '/hotels',
  FAVORITE: '/favorite',
  REVIEWS: '/comments/',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const adaptOfferToClient = (offer) => {
  const adaptedOffer = {
    ...offer,
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    host: {
      avatarUrl: offer.host.avatar_url,
      id: offer.host.id,
      isPro: offer.host.is_pro,
      name: offer.host.name,
    },
  };

  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;

  return adaptedOffer;
};
