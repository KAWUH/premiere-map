import React, { Component } from 'react'
import IncontNavbar from './IncontNavbar'
import Content from './Content'

export default class Container extends Component {
  render() {
    return (
      <div className='container'>
        <IncontNavbar></IncontNavbar>
        <Content></Content>
      </div>
    )
  }
}
