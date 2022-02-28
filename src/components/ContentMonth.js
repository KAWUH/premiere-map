import React, { Component } from 'react'
import NameOfMonth from './NameOfMonth'
import Products from './Products'

export default class ContentMonth extends Component {
  render() {
    return (
      <div className='content-month'>
        <NameOfMonth></NameOfMonth>
        <Products></Products>
      </div>
    )
  }
}
