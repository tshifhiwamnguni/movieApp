import React from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import { AiTwotoneHome } from 'react-icons/ai'
import { TbCalendarStats } from 'react-icons/tb'
import { RiReservedFill } from 'react-icons/ri'
import { FaHourglassHalf, FaWindowClose } from 'react-icons/fa'
import { CiSettings } from 'react-icons/ci'
import { ImProfile } from 'react-icons/im'
import { IoMdLogOut } from 'react-icons/io'
import Dashboard from '../dash/dash'

function home() {
  return (

    <>

      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col overflow-scroll">

          <div className="w-screen navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">MovieApp.</div>
            <div className="flex-none hidden lg:block m-2">
              <ul className="menu menu-horizontal flex gap-2">

                <li className='bg-green-400'><a><AiTwotoneHome />Home</a></li>
                <li className='bg-green-400'><a><ImProfile />Profile</a></li>
                <li className='bg-green-400'><a><RiReservedFill />Statistics</a></li>
                <li className='bg-green-400'><a><FaHourglassHalf />Coming Soon</a></li>
                <li className='bg-green-400'><a><IoMdLogOut />Logout</a></li>
              </ul>
            </div>
          </div>
          <div className='flex justify-evenly align-center gap-2'><Dashboard /></div>
        
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100">
            <label htmlFor="my-drawer-3" className="drawer-overlay ml-auto"><FaWindowClose /></label>
            <li className='flex flex-row'><h1><AiTwotoneHome /></h1><a>Home</a></li>
            <li className='flex flex-row'><h1><ImProfile /></h1><a>Profile</a></li>
            <li className='flex flex-row'><h1><FaHourglassHalf /></h1><a>Coming Soon</a></li>
            <li className='flex flex-row'><h1><RiReservedFill /></h1><a>Statistics</a></li>
            <li className='flex flex-row'><h1><IoMdLogOut /></h1><a>Logout</a></li>
          </ul>
        </div>

      </div>

    </>
  );
}

export default home;