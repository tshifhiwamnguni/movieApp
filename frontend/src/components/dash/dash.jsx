import React from "react";
import womanKing from '../../../src/assets/womanKing.jpeg'
function Dashboard() {
    return (
      <container className="min-h-screen">
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1">
  
          <div className="card w-96 bg-primary rounded text-primary-content mt-16">
            <div className="card-body text-center">
              <img class="w-screen" src={womanKing} alt="Mountain"/>
              <div className="flex justify-between">
                <h2 className="card-title flex justify-center">Woman King</h2>
                <div className="badge badge-secondary">PG 16 | DRAMA</div>
              </div>
              <p>A historical epic inspired by the true events that happened in The Kingdom of Dahomey, one of the most powerful states of Africa in the 18th and 19th centuries.</p>
              <div className="flex flex-col justify-center text-center">
                <h2 className="card-title flex">Total Bookings: <span className="bg-white px-2 square text-xl ml-auto">100</span></h2>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-primary rounded text-primary-content mt-16">
            <div className="card-body text-center">
              <img class="w-screen" src={womanKing} alt="Mountain"/>
              <div className="flex justify-between">
                <h2 className="card-title flex justify-center">Woman King</h2>
                <div className="badge badge-secondary">PG 16 | DRAMA</div>
              </div>
              <p>A historical epic inspired by the true events that happened in The Kingdom of Dahomey, one of the most powerful states of Africa in the 18th and 19th centuries.</p>
              <div className="flex flex-col justify-center text-center">
                <h2 className="card-title flex">Total Bookings: <span className="bg-white px-2 square text-xl ml-auto">100</span></h2>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-primary rounded text-primary-content mt-16">
            <div className="card-body text-center">
              <img class="w-screen" src={womanKing} alt="Mountain"/>
              <div className="flex justify-between">
                <h2 className="card-title flex justify-center">Woman King</h2>
                <div className="badge badge-secondary">PG 16 | DRAMA</div>
              </div>
              <p>A historical epic inspired by the true events that happened in The Kingdom of Dahomey, one of the most powerful states of Africa in the 18th and 19th centuries.</p>
              <div className="flex flex-col justify-center text-center">
                <h2 className="card-title flex">Total Bookings: <span className="bg-white px-2 square text-xl ml-auto">100</span></h2>
              </div>
            </div>
          </div>
  
          {/* <div className="card w-96 bg-primary rounded text-primary-content mt-16">
            <div className="card-body ">
              <h2 className="card-title flex justify-center ">Past Events</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
  
              </div>
            </div>
          </div>
  
          <div className="card w-96 bg-primary rounded text-primary-content mt-16">
            <div className="card-body">
              <h2 className="card-title flex justify-center ">Ongoing Events</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
  
              </div>
            </div>
          </div>
  
          <div className="card w-96 bg-primary rounded text-primary-content mt-16">
            <div className="card-body">
              <h2 className="card-title flex justify-center ">Venue Events</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
  
              </div>
            </div>
          </div> */}
  
        </div>
      </container>
    );
  }

  export default Dashboard;