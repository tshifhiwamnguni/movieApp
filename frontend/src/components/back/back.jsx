import React from "react";
import { IoMdArrowBack } from 'react-icons/io'
import {useNavigate} from 'react-router-dom';

function Bac() {
    const navigate = useNavigate();

  return (
    <div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost normal-case text-xl" onClick={()=>navigate(-1)}><IoMdArrowBack/></a>
      </div>
    </div>
  );
}

export default Bac;
