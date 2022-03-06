import React, { Component } from 'react'


export default class NavbarMonth extends Component {

  

  render() {
    return (
      <div className='navbar-month'><a href={'#' + this.props.monthName}>{this.props.monthName}</a></div>
    )
  }
}
