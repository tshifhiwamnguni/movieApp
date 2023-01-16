import React from "react";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { MdMovie } from "react-icons/md";
import { TbCurrencyReal } from "react-icons/tb";

function Dashboard() {
  return (
    <div className="hero min-h-screen xs:mt-28">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 gap-5 justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Number of booking</h2>
            <div className="flex space-x-2 justify-center">
              <BsFillBookmarkPlusFill style={{ fontSize: "2rem" }} />
              <p className="text-2xl font-bold">1000</p>
            </div>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">More info</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Number of users</h2>
            <div className="flex space-x-2 justify-center">
              <HiUsers style={{ fontSize: "2rem" }} />
              <p className="text-2xl font-bold">1000</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">More info</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Number of movies</h2>
            <div className="flex space-x-2 justify-center">
              <MdMovie style={{ fontSize: "2rem" }} />
              <p className="text-2xl font-bold">1000</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">More info</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Income</h2>
            <div className="flex space-x-2 justify-center">
              <TbCurrencyReal style={{ fontSize: "2rem" }} />
              <p className="text-2xl font-bold">1000.00</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">More info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
