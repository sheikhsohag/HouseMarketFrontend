import React from 'react'
import { Link } from 'react-router-dom'

function Setting() {
  return (
    <div className='container-fluid'>
       <div className="row bg-light m-5 rounded d-flex justify-content-center">
             <div className="col-sm-12 col-md-5">
                 <div className=''>
                  <Link to="/user/reset/password">
                  <button className='btn btn-light decoration m-3'>Reset Password</button>
                  </Link>
                    
                 </div>
              </div>  

              <div className="col-sm-12 col-md-5">
         
              <div className=''>
                  <Link to="/user/account/delete">
                       <button className='btn btn-light decoration m-3'>DELETE ACCOUNT</button>
                  </Link>
                 </div>
              </div>
       </div>
    </div>
  )
}

export default Setting
