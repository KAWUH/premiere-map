import React, {useState} from 'react'
import SingleProduct from './SingleProduct'
import domination from '../domination.webp'
import blitzkrieg from '../blitzkrieg.webp'

export default function Products() {

  const [array, setArray] = useState([
      {premiere: true, image: domination, title: "Domination"},
      {premiere: true, image: domination, title: "Domination"},
      {premiere: false, image: blitzkrieg, title: "Blitzkrieg"},
      {premiere: true, image: domination, title: "Domination"},
      {premiere: false, image: blitzkrieg, title: "Blitzkrieg"},
      {premiere: false, image: blitzkrieg, title: "Blitzkrieg"},
      {premiere: true, image: domination, title: "Domination"},
      {premiere: true, image: domination, title: "Domination"},
      {premiere: true, image: blitzkrieg, title: "Blitzkrieg"},
      {premiere: false, image: domination, title: "Domination"},
      {premiere: true, image: blitzkrieg, title: "Blitzkrieg"},
      {premiere: true, image: blitzkrieg, title: "Blitzkrieg"},
      {premiere: true, image: domination, title: "Domination"},
      {premiere: false, image: blitzkrieg, title: "Blitzkrieg"},
      {premiere: true, image: domination, title: "Domination"},
      {premiere: false, image: domination, title: "Domination"},
      {premiere: true, image: blitzkrieg, title: "Blitzkrieg"},
      {premiere: true, image: domination, title: "Domination"},
  ])

return (
  <div className='products'> 
    {array.map((item, index) =>
    <div className='single-item' key={index}>
        <SingleProduct premiere={item.premiere} image={item.image} title={item.title}></SingleProduct>
    </div>  
    )} 
  </div>
)
}