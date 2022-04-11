import React from 'react';


export default function Cwc({ photo, title, description }) {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 m-3 d-flex justify-content-around  w-100 p-3 ' style = {{ background: "#16161E" }}>
                    <div className='' id = "icon">
                    <img src = {photo} alt = "bitcoinWallet" className='img img-responsive' />
                    </div>
                    <div className='text-white text-start'>
                        <h4> { title } </h4>
                        <p> { description } </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
