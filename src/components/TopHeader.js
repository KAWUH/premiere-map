import React from 'react'
import '../index.css';
import logo from "../logo.svg";
import SearchBar from './SearchBar'


export default function TopHeader() {
  return (
    <div className='top-header'><img src={logo} height='70px' width='70px'></img><div className='h1-title'><h1>Premiere map</h1></div><SearchBar/> </div>
  )
}
