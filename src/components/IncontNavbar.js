import React, { Component } from 'react'
import IncontNavbarMonth from './IncontNavbarMonth'

export default class IncontNavbar extends Component {
  render() {
    return (
      <div className='incont-navbar'>
        <IncontNavbarMonth monthName='January'></IncontNavbarMonth>
        <IncontNavbarMonth monthName='February'></IncontNavbarMonth>
        <IncontNavbarMonth monthName='March'></IncontNavbarMonth>
        <IncontNavbarMonth monthName='April'></IncontNavbarMonth>
        <IncontNavbarMonth monthName='May'></IncontNavbarMonth>
        <IncontNavbarMonth monthName='June'></IncontNavbarMonth>
        <IncontNavbarMonth monthName='July'></IncontNavbarMonth>
        <IncontNavbarMonth monthName='August'></IncontNavbarMonth>
        <IncontNavbarMonth monthName='September'></IncontNavbarMonth>
        <IncontNavbarMonth monthName='October'></IncontNavbarMonth>
        <IncontNavbarMonth monthName='November'></IncontNavbarMonth>
        <IncontNavbarMonth monthName='December'></IncontNavbarMonth>
      </div>
    )
  }
}
