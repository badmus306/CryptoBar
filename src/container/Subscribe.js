import React from 'react';

export default function Subscribe() {
  return (
    <div>
        <div className='container' data-aos = "zoom-in" data-aos-delay='750' data-aos-duration='3000' style = {{background: "#5285F2", padding: "15px", borderRadius: "50px"}}>
            <div className='row mx-auto'>
                <div className='col p-5'>
                    <div>
                        <h2 className='text-white fs-1'> Subscribe to get information, <span className='text-dark'>  latest news and offers from Our Page </span> </h2>
                        <div className='row mt-3 mb-3 d-md-inline-block overflow-lg-auto overflow-md-hidden  py-2 d-block col-lg-5 col-md-6 '>
                                <div className='col'>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                    </div>
                                </div>
                                <div className='col'>
                                    <button className='btn btn-warning btn-lg p-2 '> Subscribe </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
