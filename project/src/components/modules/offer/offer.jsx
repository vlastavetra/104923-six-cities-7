import React from 'react';
import {Link} from 'react-router-dom';
import {MAX_STARS, PlaceType} from '../../../const';
import offerProp from './offer.prop';
import PropTypes from 'prop-types';

function Offer(props) {
  const {page, offer} = props;
  const {
    is_premium: isPremium,
    is_favorite: isFavorite,
    preview_image: previewImage,
    price,
    rating,
    title,
    type,
  } = offer;

  const getClassByPage = (el) => {
    switch (el) {
      case 'main':
        return 'cities__place-card';
      case 'offer':
        return 'near-places__card';
      case 'favorites':
        return 'favorites__card';
      default: break;
    }
    return '';
  };

  const getStars = () => (rating / MAX_STARS) * 100;

  return (
    <article className={`${getClassByPage(page)} place-card`}>
      { isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button
              ${isFavorite && 'place-card__bookmark-button--active'}`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width="18"
              height="19"
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getStars()}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <Link to={`/offer/${offer.id}`}>
          <h2 className="place-card__name">
            {title}
          </h2>
        </Link>
        <p className="place-card__type">{PlaceType[type]}</p>
      </div>
    </article>
  );
}

Offer.propTypes = {
  offer: offerProp,
  page: PropTypes.string.isRequired,
};

export default Offer;
