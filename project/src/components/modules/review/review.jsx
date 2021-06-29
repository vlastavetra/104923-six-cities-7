import React from 'react';
import DayJS from 'react-dayjs';
import {getStars} from '../../../utils';
import reviewProp from './review.prop';

function Review(props) {
  const {review} = props;
  const {
    id,
    comment,
    rating,
    date,
    user: {name, avatar_url: avatarUrl},
  } = review;

  return (
    <li key={id} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getStars(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <DayJS className="reviews__time" dateTime={date} format="MMMM YYYY">{date}</DayJS>
      </div>
    </li>
  );
}

Review.propTypes = {
  review: reviewProp,
};

export default Review;
