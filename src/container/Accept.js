import React from 'react';
import { Brand } from './index';

export default function Accept() {
  return (
    <div>
        <div className='container vh-100'>
            <div className='row'>
                <div className='col mx-auto' data-aos = "zoom-in-up" data-aos-delay='750' data-aos-duration='3000'>
                    <h1 className='text-white text-wrap font-heading fw-bolder' style= {{fontSize: "60px"}}> Accepted Blockchain </h1>
                    <p className='text-white fs-4 mt-4 mb-4'> We have a list of of supported blockchain that will be available for you to carry out transactions with on bitpowr </p>

                    <Brand />
                </div>
            </div>
        </div>
    </div>
  )
}
