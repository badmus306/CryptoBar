import React from 'react'
import { FaFacebookF,FaTwitter, FaInstagram } from 'react-icons/fa'
import { Footerlinks } from '../components'

export default function Footer() {
  return (
    <div>
        <div className='container-fluid' style = {{ background: "#16161E", padding: "65px" }} >
            <footer className='row mt-auto'>
                <div className='col-md-3'>
                    <h2 className='text-white text-start'> Logo </h2>
                    <p className='text-white text-start'> Copyright &copy; 2022 Badmus Segun</p>
                    <p className='text-white text-start'> All rights reserved </p>
                </div>

                {/* use components and amap here */}

                <div className='col-md-3'>
                   <Footerlinks title = {"Company"} linkone = {"Pricing"} linktwo = {"Docs"} linkthree = {"Refer & Earn "}  />
                </div>
                <div className='col-md-3'>
               <Footerlinks title = {"Support"} linkone = {"Contact-sales"} linktwo = {"Terms of Service"} linkthree = {"Privacy Policy"} />
                </div>
                <div className='col-md-3 text-white'>
                    We are Social
                    <div className='d-flex justify-content-evenly gap-2'>
                        <div> <FaFacebookF /> </div>
                        <div> <FaTwitter /> </div>
                        <div> <FaInstagram /> </div>

                    </div>
                </div>
            </footer>
        </div>
    </div>
  )
}
