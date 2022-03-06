import React, { Component } from 'react'

export default class IncontNavbarMonth extends Component {
  render() {
    return (
      <div className='incont-navbar-month'>
        <a href={'#' + this.props.monthName}>{this.props.monthName}</a>
      </div>
    )
  }
}
