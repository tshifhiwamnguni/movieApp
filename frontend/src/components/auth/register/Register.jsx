import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { BiDoughnutChart, BiRename } from "react-icons/bi";
import {AiFillLock} from "react-icons/ai"
import axios from "axios";
import { API } from "../../environment/constant";
import { getToken } from "../../environment/helpers";
import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ClientForm from "./ClientForm";
import CinemaForm from "./CinemaForm";
import TheatreForm from "./TheatreForm";



function Register() {

  const [regForm, setRegForm] = useState("client")

  function setForm(form){
      setRegForm(form)
  }

  return (
   <>
   <div >
    <div className="flex justify-center">
      <button onClick={()=>setForm('client')} className=" btn radius">register as a customer</button>
      <button onClick={()=>setForm('cinema')} className=' btn btn-primary'>register a cinema</button>
      <button onClick={()=>setForm('theatre')} className="btn">register a theatre</button>
    </div>
    {regForm === 'client'?  <ClientForm/>:''}
    {regForm === 'cinema'? <CinemaForm/>:''}
    {regForm === 'theatre'? <TheatreForm/>:''}
   </div>
  
   </>
  )
}

export default Register