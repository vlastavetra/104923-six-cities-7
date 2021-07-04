import React from 'react';
import cx from 'classnames';
import {Link} from 'react-router-dom';
import {PlaceType} from 'const';
import {getStars} from 'utils';
import offerProp from './offer.prop';
import PropTypes from 'prop-types';

function Offer(props) {
  const {page, offer, onListItemHover} = props;
  const {
    is_premium: isPremium,
    is_favorite: isFavorite,
    preview_image: previewImage,
    price,
    rating,
    title,
    type,
  } = offer;

  const itemClasses = cx('place-card', {
    'cities__place-card': page === 'main',
    'near-places__card': page === 'offer',
    'favorites__card': page === 'favorites',
  },
  );

  const imgClasses = cx('place-card__image-wrapper', {
    'cities__image-wrapper': page === 'main',
    'near-places__image-wrapper': page === 'offer',
    'favorites__image-wrapper': page === 'favorites',
  },
  );

  return (
    <article onMouseMove={(evt) => evt && onListItemHover(offer.id)} className={itemClasses}>
      { isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={imgClasses}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={ page === 'favorites' ? '150' : '260'}
            height={ page === 'favorites' ? '110' : '200'}
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
            <span style={{width: `${getStars(rating)}%`}}></span>
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
  onListItemHover: PropTypes.func,
};

export default Offer;
