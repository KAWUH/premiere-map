import React, { Component } from 'react'
import NavbarMonth from './NavbarMonth'

export default class SideNavbar extends Component {
  render() {
    return (
      <div className='side-navbar'>
        <NavbarMonth monthName='January'></NavbarMonth>
        <NavbarMonth monthName='February'></NavbarMonth>
        <NavbarMonth monthName='March'></NavbarMonth>
        <NavbarMonth monthName='April'></NavbarMonth>
        <NavbarMonth monthName='May'></NavbarMonth>
        <NavbarMonth monthName='June'></NavbarMonth>
        <NavbarMonth monthName='July'></NavbarMonth>
        <NavbarMonth monthName='August'></NavbarMonth>
        <NavbarMonth monthName='September'></NavbarMonth>
        <NavbarMonth monthName='October'></NavbarMonth>
        <NavbarMonth monthName='November'></NavbarMonth>
        <NavbarMonth monthName='December'></NavbarMonth>
      </div>
    )
  }
}
