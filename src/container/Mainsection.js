import React from 'react';
import bitcoin from '../assets/bitcoinHolding.png';
import './mainsection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Mainsection() {
  return (
    <div>
              {AOS.init()}
        <div className='container vh-100 h-100'  style = {{paddingTop: "170px"}}>
            <div className='row row-cols-1 row-cols-md-2 d-flex align-items-center'>
                <div className='col vh-50 over' data-aos = "fade-right" data-aos-delay='750' data-aos-duration='3000' >
                <h1 className='text-white text-start fs-1 display-1 fw-bolder'> Expand Your Business in Our <span> Portfolio </span> Infrastructure </h1>
                    <p className='text-white word-break fs-4 mt-5 mb-4 text-start'>
                    We provide the building blocks for businesses and individuals globally to take advantage of blockchain to access the global digital economy
                    </p>

                    <div className='d-flex flex-row justify-content-start'>
                    <button className='btn btn-primary btn-lg p-3 border border-1 border-white' type = "button"> Request a Demo </button>
                    </div>
                </div>
                <div className='col h-75' data-aos = "fade-left" data-aos-delay='750' data-aos-duration='3000'>
                    <img src = { bitcoin } className = "img img-responsive img-fluid d-block" />
                </div>
            </div>
        </div>
    </div>
  )
}
