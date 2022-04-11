import React from 'react';

export default function Maintext({ littleText, mainText, sectionText }) {
  return (
    <div>
        <div className='container my-4 vh-100'>
            <div className='row'>
                <div className='col-md-8 mx-auto' data-aos = "flip-left" data-aos-delay='750' data-aos-duration='3000'>
                    <h4 style = {{color: "#5285E4"}} className = "fw-bolder"> {  littleText } </h4>
                    <h1 className='text-white text-wrap font-heading fw-bolder' style= {{fontSize: "60px"}} > {  mainText } </h1>
                    <p className='text-white fs-5 mt-3'> { sectionText } </p>
                </div>
            </div>
        </div>
    </div>
  )
}
