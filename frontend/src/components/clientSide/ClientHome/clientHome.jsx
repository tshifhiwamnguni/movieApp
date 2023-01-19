import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./ClientHome.css";
import { useNavigate } from "react-router-dom";
function ClientHome() {
  const navigate = useNavigate();

  function moveToCinemas() {
    navigate('../cinemaList')
  }
  function moveToTheatres() {
      navigate('../theatreList')
  }
    
  return (
    
       <div className="mt-24  flex flex-row justify-center">
        <div className="container">
        <div className="cardz" onClick={moveToCinemas}>
          <h1 className="child">Movies</h1>
        </div>
        <div className="cardz" onClick={moveToTheatres} >
            <h1 className="child">Theatre</h1>
        </div>
        </div>
       </div>
    
  );
}

export default ClientHome;
