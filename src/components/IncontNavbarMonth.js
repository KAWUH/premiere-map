import React, { Component } from 'react'

export default class IncontNavbarMonth extends Component {
  render() {
    return (
      <div className='incont-navbar-month'>
        {this.props.monthName}
      </div>
    )
  }
}
