import React from 'react';
import calendar from '../calendar.svg';

export default function NameOfMonth(props) {

  return (
    <div className='name-of-month'><img src={calendar}></img><a className='name-of-month-a' name={props.monthName}>{props.monthName}</a></div>
  )
}
