import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { ActionCreator } from 'store/action';

function SortForm (props) {
  const {currentSorting, setSort} = props;

  const [sortList, showSortList] = useState(false);

  const SortType = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={ () => sortList === false ? showSortList(true) : showSortList(false)}
    >
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0">
        {currentSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${sortList && 'places__options--opened'} `}>
        {SortType.map((item, id) =>  <li className={`places__option ${item === currentSorting && 'places__option--active'} `} key={id++} tabIndex="0" onClick={() => setSort(item)}>{item}</li>)}
      </ul>
    </form>
  );
}

SortForm.propTypes = {
  currentSorting: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
};

const mapStateToProps = ( {currentSorting} ) => ({
  currentSorting,
});

const mapDispatchToProps = (dispatch) => ({
  setSort(currentSorting) {
    dispatch(ActionCreator.setSort(currentSorting));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SortForm);
