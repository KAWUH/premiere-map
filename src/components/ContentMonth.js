import React, { Component } from 'react'
import NameOfMonth from './NameOfMonth'
import Products from './Products'

export default class ContentMonth extends Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className='content-month'>
        <NameOfMonth monthName={this.props.monthName}></NameOfMonth>
        <Products></Products>
      </div>
    )
  }
}
