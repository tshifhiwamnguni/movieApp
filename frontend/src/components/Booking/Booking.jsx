import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Booking.css";

function Booking() {
  const naviage = useNavigate();
  const [bookedSeat, setBookedSeat] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [bookingDate, setBookingDate] = useState("");
  useEffect(() => {
    // console.log("effect");
    console.log("effect ", bookedSeat);
  }, [bookedSeat]);

  function selectSeat(props) {
    if (bookedSeat.includes(props)) {
      console.log("booked");
      console.log(props);

      handleDelete(bookedSeat.findIndex((seat) => seat === props));
    } else {
      setBookedSeat((bookedSeat) => [...bookedSeat, props]);
      console.log("state: ", bookedSeat);
      setIsActive(true);
    }
  }

  function book() {
    console.log(bookedSeat);

    localStorage.setItem("seats", bookedSeat);
    localStorage.setItem("date", bookingDate);
    console.log("booked ", localStorage.getItem("seats"));
    naviage("../snackss");
  }

  const seats = [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "A10",
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "B9",
    "B10",
    ,
    "C1",
    "C2",
    "C3",
    "C4",
    "C5",
    "C6",
    "C7",
    "C8",
    "C9",
    "C10",
  ];

  let us = seats;

  const handleDelete = (index) => {
    console.log("delete ", index);
    const newElements = [...bookedSeat];
    newElements.splice(index, 1);
    setBookedSeat(newElements);
  };

  return (
    <>
      <div className="mt-24">
        <h1 className="text-center text-5xl font-bold mb-4">booking</h1>
        <div className="screen">
          <h2 className="text-center text-5xl font-bold mb-20">screen</h2>
        </div>
        <br />

        <div className="container">
          <div className="seats_container">
            {us.map((element, index) => {
              return (
                <div
                  className={bookedSeat.includes(element) ? "greyed" : "block"}
                  key={element}
                  onClick={() => {
                    selectSeat(element);
                  }}
                >
                  {element}
                </div>
              );
            })}
          </div>
          <br />
          <div className="red">
            <input
              type="datetime-local"
              onChange={(e) => setBookingDate(e.target.value)}
              value={bookingDate}
              className="input dateInput  w-1/6"
            />
          </div>
        </div>
        <div className="flex mt-10">
          <button
            className="text-center text-5xl font-bold mb-4 btn btn-primary radius"
            onClick={book}
          >
            {" "}
            book{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Booking;
