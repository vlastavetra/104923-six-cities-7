import React from 'react';
import cx from 'classnames';
import Offer from '../../modules/offer/offer';
import PropTypes from 'prop-types';

function OffersList (props) {
  const {page, offers, onListItemHover} = props;

  const listClasses = cx('places__list', {
    'cities__places-list tabs__content': page === 'main',
    'near-places__list': page === 'offer',
    'favorites__places': page === 'favorites',
  },
  );

  return (
    <div className={listClasses}>
      { offers.map((offer) => (
        <Offer
          onListItemHover={onListItemHover}
          page={page}
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.string.isRequired,
  onListItemHover: PropTypes.func,
};

export default OffersList;
