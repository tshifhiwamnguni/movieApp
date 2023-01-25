import React, { useState } from "react";


import { useNavigate, Link } from "react-router-dom";

function RegistrationSelector() {
  return (
    <div>
       <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
         
          <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">

            <div className="card-body">
              <form  noValidate autoComplete="on">
                
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit">
                    register cinema
                  </button>
                  <button className="btn btn-primary" type="submit">
                    register as Client
                  </button>
                  <button className="btn btn-primary" type="submit">
                    register theatre
                  </button>
                  <button className="btn btn-primary" type="submit">
                    register cinema
                  </button>
                </div>
             
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default RegistrationSelector