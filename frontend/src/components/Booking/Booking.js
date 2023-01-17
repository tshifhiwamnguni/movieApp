import React, {useState, useEffect} from "react";
import "./Booking.css";

function Booking() {

  const [bookedSeat, setBookedSeat] = useState([])

useEffect(()=>{
  // console.log("effect");
  console.log("effect ", bookedSeat)
},[bookedSeat])


  function selectSeat(props) {
    if(bookedSeat.includes(props)){
      console.log("booked")
    }else{
        setBookedSeat(bookedSeat=>[...bookedSeat, props])
         console.log("state: ",bookedSeat)
    }
  
    // console.log(props);
    // console.log(data);
   


  }


  function name() {
    // console.log(bookedSeat);

    let num = parseInt(10000000 + Math.random() * (90000000 - 10000000))
    console.log(num)
  }

  const seats = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"
    ,"B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10",
    ,"C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10",];

  let us = seats;
  return (
    <>
      <h1 className="text-center text-5xl font-bold mb-4">booking</h1>
      <div className="screen">
        <h2 className="text-center text-5xl font-bold mb-20">screen</h2>
      </div>
      <br />

      <div className="container">
        <div className="seats_container">
          {us.map((element) => {
            return( 
            <div className="block" key={element} onClick={()=>{ selectSeat(element);}} >
                {element}
            </div>);
          })}
        </div>
      </div>
    <div className="flex mt-10">
    <button className="text-center text-5xl font-bold mb-4 btn " onClick={name} >  book  </button>
    </div>
     
    </>
  );
}

export default Booking;
