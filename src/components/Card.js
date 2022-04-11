import React from 'react';
import pricings from '../service/pricings';

export default function Card() {
  return (
    <div>
          <div className='container vh-100 my-auto' data-aos = "flip-up" data-aos-delay='750' data-aos-duration='3000'>
              <div className='d-flex justify-content-start gap-2'>
                    { pricings.map((pricing)=>{
                        return <div className='m-4 p-4' style = {{backgroundColor: "#16161e", borderRadius: "30px"}}>
                <div className='' key = {pricing.id}>
                   <div className='myImg d-flex align-items-start'>
                           <img src = {pricing.myImg} className = "img img-responsive " style = {{height:"180px"}} alt = "myImage" />
                   </div>
                   <div className='textPart'>
                       <h2 className='text-white text-start mt-3 mb-3 fs-1 fw-bold'> {pricing.title} </h2>
                       <p className='text-white text-start'> {pricing.desc} </p>
                   </div>
                </div>
                            </div>
                    }) }
              </div>
          </div>

    </div>
  )
}
