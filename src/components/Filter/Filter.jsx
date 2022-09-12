import React from 'react';
import style from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterSlice } from 'redux/contacts';

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(filterSlice.getFilter);

  const changeFilter = e => {
    dispatch(filterSlice.filterItems(e.currentTarget.value));
  };

  return (
    <label className={style.label}>
      <span>Search by name:</span>
      <input
        type="text"
        placeholder="enter a name..."
        value={value}
        onChange={changeFilter}
        className={style.input}
      />
    </label>
  );
}

export default Filter;
