import React from 'react';
import {  erc20, ethereum, dogecoin, litecoin, polygon, terra, bnb, bitcoin, bitcoincash
 } from './imports';

export default function Brand() {
  return (
    <div>
      <div className='container mt-5 mb-5'>
        <div className='row'>
          <div className='col m-2' style = {{background: "#16161E", padding: "4px"}}>
              <img src = {bitcoin} alt = "Bitcoin" loading='lazy' className='img img-responsive' />
            </div>
            <div className='col m-2' style = {{background: "#16161E", padding: "4px"}}>
              <img src = {litecoin} alt = "Litecoin" loading='lazy' className='img img-responsive' />
            </div>
            <div className='col m-2' style = {{background: "#16161E", padding: "4px"}}>
              <img src = {ethereum} alt = "Ethereum" loading='lazy' className='img img-responsive' />
            </div>
            <div className='col m-2' style = {{background: "#16161E", padding: "4px"}}>
                <img src = {erc20} alt = "Erc20" loading='lazy' className='img img-responsive' />
            </div>

            <div className='col m-2' style = {{background: "#16161E", padding: "4px"}}>
                <img src = {bitcoincash} alt = "BitcoinCash" loading='lazy' className='img img-responsive' />
            </div>


           <div className='col m-2' style = {{background: "#16161E", padding: "4px"}}>
                <img src = {bnb} alt = "BNB" loading='lazy' className='img img-responsive' />
            </div>

            <div className='col m-2' style = {{background: "#16161E", padding: "4px"}}>
                <img src = {dogecoin} alt = "Dogecoin" loading='lazy' className='img img-responsive' />
            </div>

            <div className='col m-2' style = {{background: "#16161E", padding: "4px"}}>
                <img src = {polygon} alt = "Polygon" loading='lazy' className='img img-responsive' />
            </div>
            <div className='col m-2' style = {{background: "#16161E", padding: "4px"}}>
              <img src = {terra} alt = "Terra" loading='lazy' className='img img-responsive' />
            </div>




        </div>
      </div>
    </div>
  )
}
