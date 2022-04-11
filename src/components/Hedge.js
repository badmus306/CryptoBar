import React from 'react';
import { Subscribe, Footer } from '../container';
import { Pagetext, Card,Nav } from './index';

export default function Hedge() {
  return (
    <div>
      <Nav />
        <div className='container vh-80 pt-5' data-aos = "fade-right" data-aos-delay='750' data-aos-duration='3000' style = {{marginBottom: "110px"}}>
            <div className='row'>
            <div className='col-md-7 vh-50 over'>
                <h1 className='text-white text-start fs-1 display-1 fw-bolder'> Hedge Funds </h1>
                    <p className='text-white word-break fs-4 mt-5 mb-4 text-start'>
                    Use our secure cross-exchange trading environment infrastructure to trade capital across 30+ exchanges.
                    </p>

                    <div className='d-flex flex-row justify-content-start'>
                    <button className='btn btn-primary btn-lg p-3 border border-1 border-white' type = "button"> Get Started </button>
                    </div>
                </div>
            </div>
        </div>

        <Card />

        <Subscribe />

        <div className='mx-auto text-white'>
        <Pagetext title = {"Ready to start?"} desc = {"Crypto Bars helps you integrate with and build on the blockchain with confidence"} myBtn = {"Get Started"} />
        </div>

        <Footer />

    </div>
  )
}
