import React from "react";
import { useNavigate } from 'react-router-dom';

function Splash() {
    const navigate = useNavigate();

    function move(){
        navigate('login');
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://placeimg.com/260/400/arch"
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Movie Theatre</h1>
            <p className="py-6">
            Stream the world's best movies, all in one place.
            </p>
            <button className="btn btn-primary" onClick={move}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
