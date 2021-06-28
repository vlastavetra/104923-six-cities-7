import React, {useState} from 'react';
import Header from '../../modules/header/header';
import Form from '../../modules/form/form';
import OffersList from '../../modules/offersList/offersList';
import ReviewList from '../../modules/reviewList/reviewList';
import Map from '../../modules/map/map';
import {PlaceType} from '../../../const';
import {getStars} from '../../../utils';
import PropTypes from 'prop-types';

function Offer(props) {
  const {offers, reviews} = props;
  const {
    is_favorite: isFavorite,
    is_premium: isPremium,
    images,
    title,
    rating,
    type,
    bedrooms,
    max_adults: maxAdults,
    price,
    goods,
    host: {name, avatar_url: avatarUrl},
    description,
  } = offers[0];

  const [selectedPoint, setSelectedPoint] = useState(0);

  const onListItemHover = (listItemName) => {
    const currentPoint = offers.find((offer) =>
      offer.id === listItemName,
    );
    setSelectedPoint(currentPoint);
  };

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img
                    className="property__image"
                    src={image}
                    alt={title}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button
                  className={`property__bookmark-button button
                   ${isFavorite && 'property__bookmark-button--active'}`}
                  type="button"
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getStars(rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {PlaceType[type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((item) => (
                    <li className="property__inside-item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  <span className="property__user-status">
                    Pro
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewList
                  reviews={reviews}
                />
                <Form />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={offers}
              selectedPoint={selectedPoint}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList
              page='offer'
              offers={offers}
              onListItemHover={onListItemHover}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

Offer.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  reviews: PropTypes.arrayOf(PropTypes.object),
};

export default Offer;
