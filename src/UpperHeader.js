import React, { Component } from 'react'
import './index.css';
import TopHeader from "./components/TopHeader";

export default class UpperHeader extends Component {
  render() {
    return (
      <div className='upper-header'>
        <TopHeader></TopHeader>
        <div className='lower-headers-container'>
          <div className='lower-header'><h2>CALENDAR of premieres</h2></div>
          <div className='even-lower-header'><h2>and reprints</h2></div>  
        </div>
      </div>
      
    )
  }
}
