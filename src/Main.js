import React, { Component } from 'react'
import Container from "./components/Container";
import SideNavbar from "./components/SideNavbar";
import Footer from './components/Footer'

export default class Main extends Component {
  render() {
    return (
      <div className='main'>
        <Container></Container>
        <SideNavbar></SideNavbar>
        <Footer></Footer>
      </div>
    )
  }
}


