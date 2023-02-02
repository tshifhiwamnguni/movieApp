import React from "react";
import "./ClientHome.css";


import CinemaList from "./../cinemaList/CinemaList";
import TheatreList from "./../theatreList/TheareList";

function ClientHome() {
  return (
    <div className="mt-24  ">
     
         <TheatreList />
   
      <CinemaList />
    </div>
  );
}

export default ClientHome;
