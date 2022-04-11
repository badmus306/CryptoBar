import React from 'react';

export default function Seamless() {
  return (
    <div>
        <div className='container' style = {{marginTop: "100px", marginBottom: "100px"}}>
            <div className='row'>
                <div className='col-md-6 mx-auto'>
                    <h1 className='text-white fs-1 fw-bolder lh-base'>  Unlock seamless <span>  crypto
transactions </span> </h1>
                <div className='mt-4 d-flex gap-3 justify-content-center'>
                        <button className='btn btn-primary btn-md btn-md p-3 px-md-5 ml-3' type = "button"> Get Started </button>
                        <button className='btn btn-outline-primary btn-md p-3 px-md-5 me-2' type = "button"> Learn More </button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
