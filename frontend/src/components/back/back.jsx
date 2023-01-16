import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Bac() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar bg-base-100">
        <a
          className="btn btn-ghost normal-case text-xl"
          onClick={() => navigate(-1)}
        >
          <IoMdArrowBack />{" "}
        </a>
        <div className="btn btn-ghost normal-case text-xl" onClick={()=>navigate('/',{replace: true})}>
        <a style={{ fontSize: "2rem", fontWeight: "bolder" }}>Movie</a>
        <a style={{ color: "#4AE3D6", textShadow: "1px 1px 2px black" }}>
          Theatre
        </a>
        </div>
      </div>
    </div>
  );
}

export default Bac;
