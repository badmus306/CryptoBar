import React from 'react'

export default function Pagetext({ title, desc, myBtn }) {
  return (
    <div>
        <div className='container' style = {{marginTop: "110px", marginBottom: "100px"}}>
            <div className='row'>
                    <div className='col-md-7 mx-auto'>
                    <h1 className='fw-bolder fs-1'> {title} </h1>
                    <p className='fs-5 mt-4 mb-5'> {desc} </p>
                    <button className='btn btn-primary btn-lg'> {myBtn} </button>
                    </div>
            </div>
        </div>
    </div>
  )
}
