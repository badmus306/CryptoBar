import React from 'react';
import dev from '../assets/dev.png';
import { AiOutlineCheck } from 'react-icons/ai';

export default function Developer() {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6' data-aos = "zoom-in-right" data-aos-delay='750' data-aos-duration='300'>
                    <h3 className='text-white text-start'> For Developers </h3>
                    <p className='text-white text-start mt-3 mb-3'>
                    Our API services and SDKs are available and easy to use so your teams don’t need to stitch together disparate systems or spend months integrating functionality.
                    </p>

                    <div className='d-flex justify-content-start'>
                    <button className='btn btn-primary btn-md p-3 border border-1 border-white' type = "button"> Read the Docs </button>
                    </div>

            <div className='d-flex justify-content-between mt-5'>
                    <div className='text-white'> <span className='bg-primary border border-radius-50 p-1 rounded-circle m-2'> <AiOutlineCheck /> </span> Wallet API </div>
                    <div className='text-white'> <span className='bg-primary border border-radius-50 p-1 rounded-circle m-2'> <AiOutlineCheck /> </span>  Webhook </div>
                    <div className='text-white'> <span className='bg-primary border border-radius-50 p-1 rounded-circle m-2'> <AiOutlineCheck /> </span>  Bitpowr SDK </div>
            </div>

                </div>
                <div className='col-md-6' data-aos = "zoom-in-left" data-aos-delay='750' data-aos-duration='300'>
                        <img src = {dev} loading = "lazy" alt = "Dev_SVG" className='img img-responsive' />
                </div>

            </div>
        </div>
    </div>
  )
}
