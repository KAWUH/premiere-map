import React from 'react';
import premiereLogo from '../premiereLogo.svg'
import reprintLogo from '../reprintLogo.svg'

export default function SingleProduct(props) {

  return (
    <div className='single-product'>
        {props.premiere == true &&
            <div className='premiere-or-reprint'>
                <img src={premiereLogo}/>
            </div>
        }
        {props.premiere == false &&
            <div className='premiere-or-reprint'>
                <img src={reprintLogo}></img>
            </div>
        }
        
        <div className='item-image'>
            <img src={props.image} width="96px" height="96px"></img>
        </div>

        <div className='item-name'>
            <a>{props.title}</a>
        </div>
    </div>
  );
}