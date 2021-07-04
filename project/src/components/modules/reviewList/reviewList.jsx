import React from 'react';
import PropTypes from 'prop-types';
import Review from 'components/modules/review/review';
import reviewProp from 'components/modules/review/review.prop';

function ReviewList (props) {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default ReviewList;
