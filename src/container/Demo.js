import React from 'react';
import coin from '../assets/coin.png';

export default function Demo() {
  return (
    <div>
        <div className='container vh-100 my-auto'>
            <div className='row d-flex align-self-center'>
                <div className='col-md-6' data-aos = "flip-up" data-aos-delay='750' data-aos-duration='3000'>
                    <div>
                        <h1 className='text-white fw-bolder fs-1 text-start'> Why go for <span style = {{color: "#5285f2"}}> Crypto Bars </span> </h1>
                    </div>
                    <div>
                        <p className='text-white text-start mt-5 mb-5'>Our API services are available and easy to use so your teams don’t need to stitch together disparate systems or spend months integrating functionality </p>
                <div className='d-flex justify-content-start'>
                        <button className='btn btn-primary btn-md p-3 border border-1 border-white'> Request Demo  </button>
                 </div>
                    </div>
                </div>
                <div className='col-md-6' data-aos = "flip-up" data-aos-delay='750' data-aos-duration='3000'>
                    <img src = {coin} loading = "lazy" alt = "Coin" className='img img-responsive w-75' />
                </div>
            </div>
        </div>
    </div>
  )
}
