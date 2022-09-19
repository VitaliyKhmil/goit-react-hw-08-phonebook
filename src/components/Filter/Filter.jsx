import React from 'react';
import style from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterItems, getFilterWord } from 'redux/contactsSlice';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterWord);

 return (
   <label className={style.label}>
     <span>Search by name:</span>
     <input
       type="text"
       placeholder="enter a name..."
       name= "value"
       onChange={e => dispatch(filterItems(e.currentTarget.value))}
       className={filter}
     />
   </label>
 );
}

export default Filter;
