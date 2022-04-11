import React from 'react'

export default function Footerlinks( {title, linkone, linktwo, linkthree} ) {
  return (
    <div>
        <div>
            <h3 className='text-white'> {title} </h3>
            <p className='text-white'> <a href = "#" className='text-decoration-none'> {linkone} </a>  </p>
            <p className='text-white' > <a href = "#" className='text-decoration-none'> {linktwo} </a>  </p>
            <p className='text-white'> <a href = "#" className='text-decoration-none'> {linkthree} </a> </p>
        </div>
    </div>
  )
}
