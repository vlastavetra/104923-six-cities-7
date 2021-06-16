import React, {useState}  from 'react';

function Form() {
  const [data, setData] = useState({
    rating: 0,
    review: '',
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleRadioChange = (evt) => {
    const rating = evt.target.value;
    setData((state) => ({...state, rating}));
  };

  const handleTextareaChange = (evt) => {
    evt.preventDefault();
    const {value} = evt.target;
    setData({...data, review: value});
  };

  const stars = [1, 2, 3, 4, 5];

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        { stars.map((star) => (
          <React.Fragment key={star}>
            <input className="form__rating-input visually-hidden" name="rating" value={star} id={`${star}-stars`} type="radio" onChange={handleRadioChange}/>
            <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTextareaChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
}

export default Form;
