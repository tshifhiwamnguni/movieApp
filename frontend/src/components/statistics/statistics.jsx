import {BsFillJournalBookmarkFill} from "react-icons/bs"
import {BiMoviePlay} from "react-icons/bi"
import {FaUsers} from "react-icons/fa"
import {MdEventAvailable} from "react-icons/md"

function Statistics() {
    return (
    <>
   

    <div className="flex justify-center stat"><h1 className="text-4xl p-4 stat-value">Usage Statistics</h1></div>
    <hr className="w-4/5 p-2" />

    <container className="flex  justify-center">

      
      <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 gap-3">
        
       

        <div className="card w-96 bg-primary text-primary-content mt-16">
          <div className="card-body text-center">
            <BsFillJournalBookmarkFill className="mx-auto text-6xl"/>
            <h2 className="card-title flex justify-center">Number of Bookings</h2>
            <div className="stat">
                <p className="stat-value">123456789</p>
            </div>
            
            <div className="card-actions justify-end">
                <button className="btn bg-base-400">View More</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-primary text-primary-content mt-16">
          <div className="card-body text-center">
            <BiMoviePlay className="mx-auto text-6xl"/>
            <h2 className="card-title flex justify-center">Number of Movies</h2>
            <div className="stat">
                <p className="stat-value">6789</p>
            </div>
            
            <div className="card-actions justify-end">
                <button className="btn bg-base-400">View More</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-primary text-primary-content mt-16">
          <div className="card-body text-center">
            <FaUsers className="mx-auto text-6xl"/>
            <h2 className="card-title flex justify-center">Number of Users</h2>
            <div className="stat">
                <p className="stat-value">56789</p>
            </div>
            
            <div className="card-actions justify-end">
                <button className="btn bg-base-400">View More</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-primary text-primary-content mt-16">
          <div className="card-body text-center">
            <MdEventAvailable className="mx-auto text-6xl"/>
            <h2 className="card-title flex justify-center">Movies Available for Booking</h2>
            <div className="stat">
                <p className="stat-value">6789</p>
            </div>
            
            <div className="card-actions justify-end">
                <button className="btn bg-base-400">View More</button>
            </div>
          </div>
        </div>

      </div>
    </container>
    </>

    );
}

export default Statistics;