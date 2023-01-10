import React from 'react'
import {CgMenuGridR} from 'react-icons/cg'
import {AiTwotoneHome} from 'react-icons/ai'
import {TbCalendarStats} from 'react-icons/tb'
import {RiReservedFill} from 'react-icons/ri'
import {FaHourglassHalf} from 'react-icons/fa'
import { CiSettings } from 'react-icons/ci'

function home() {
  return (

    <>
    <div>home</div>

    <div className="navbar bg-red-100">
  
  <div className="flex-1 drawer-content">
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button"><CgMenuGridR/></label>
    <a className="btn btn-ghost normal-case text-xl">MovieApp</a>
    
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

<div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
     
      <li className='flex flex-row'><h1><AiTwotoneHome /></h1><a>Home</a></li>
      <li className='flex flex-row'><h1><TbCalendarStats /></h1><a>Statistics</a></li>
      <li className='flex flex-row'><h1><RiReservedFill /></h1><a>Bookings</a></li>
      <li className='flex flex-row'><h1><FaHourglassHalf /></h1><a>Coming Soon</a></li>
      <li className='flex flex-row'><h1><CiSettings /></h1><a>Settings</a></li>
      
    </ul>
  </div>
</div>

</>
  )
}

export default home;