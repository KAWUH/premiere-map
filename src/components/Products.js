import React, { Component } from 'react'
import SingleProduct from './SingleProduct'

export default class Products extends Component {
  render() {
    return (
      <div className='products'>
        <SingleProduct></SingleProduct> {/*TODO mechanism of showing every available product*/} 
      </div>
    )
  }
}


