import React, { Component } from 'react'
import ContentMonth from './ContentMonth'

export default class Content extends Component {
  render() {
    return (
      <div className='content'>
        <ContentMonth monthName='January'></ContentMonth>
        <ContentMonth monthName='February'></ContentMonth>
        <ContentMonth monthName='March'></ContentMonth>
        <ContentMonth monthName='April'></ContentMonth>
        <ContentMonth monthName='May'></ContentMonth>
        <ContentMonth monthName='June'></ContentMonth>
        <ContentMonth monthName='July'></ContentMonth>
        <ContentMonth monthName='August'></ContentMonth>
        <ContentMonth monthName='September'></ContentMonth>
        <ContentMonth monthName='October'></ContentMonth>
        <ContentMonth monthName='November'></ContentMonth>
        <ContentMonth monthName='December'></ContentMonth>
      </div>
    )
  }
}
