import React, { useEffect } from "react";
import { IoMdLogOut } from "react-icons/io";
import { removeToken } from "../../environment/helpers";
import { useNavigate } from "react-router-dom";
import { BsHouse } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbMovie } from "react-icons/tb";
import { IoCloseCircleOutline } from "react-icons/io5";
// import "./navbar.css";
import {Outlet} from "react-router-dom" ;

function TheatreNavbar() {
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      navigate("/login/", { replace: true });
    }
  });

  function logout() {
    removeToken();
    navigate("/login/", { replace: true });
  }

  const active = true;
  return (
    <>
      <div className="drawer" data-theme='dark'>
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col overflow-scroll">
          <div className="w-screen navbar bg-base-300 fixed z-10">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <a style={{ fontSize: "2rem", fontWeight: "bolder" }}>Show</a>
              <a className="" style={{ color: "#4AE3D6", textShadow: "1px 1px 2px black" }}>
                Theatre
              </a>
            </div>
            <div className="flex-none hidden lg:block m-2">
              <ul className="menu menu-horizontal flex gap-2">
                <li  onClick={() => navigate("/theatre/dash/")}>
                  <a>
                    <BsHouse style={{ fontSize: "1.5rem" }} />
                    Home
                  </a>
                </li>
                <li onClick={() => navigate("/theatre/snacks/")}>
                  <a>
                    <IoFastFoodOutline style={{ fontSize: "1.5rem" }} />
                    Snacks
                  </a>
                </li>
                <li onClick={() => navigate("/theatre/shows/")}>
                  <a>
                    <TbMovie style={{ fontSize: "1.5rem" }} />
                    Shows
                  </a>
                </li>
                <li onClick={logout}>
                  <a>
                    <IoMdLogOut style={{ fontSize: "1.5rem" }} />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center align-center">
           
          <Outlet />
          </div>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 flex justify-center mn">
            <label
              htmlFor="my-drawer-3"
              className="drawer-overlay ml-auto close"
            >
              <IoCloseCircleOutline style={{ fontSize: "2rem" }} />
            </label>
            <li onClick={() => navigate("/theatre/dash/")}>
              <a className={active ? "active" : ""}>
                <BsHouse style={{ fontSize: "1.5rem" }} />
                Home
              </a>
            </li>
            <li onClick={() => navigate("/theatre/snacks/")}>
              <a>
                <IoFastFoodOutline style={{ fontSize: "1.5rem" }} />
                Snacks
              </a>
            </li>
            <li onClick={() => navigate("/theatre/shows/")}>
              <a>
                <TbMovie style={{ fontSize: "1.5rem" }} />
               Shows
              </a>
            </li>
            <li onClick={logout}>
              <a>
                <IoMdLogOut style={{ fontSize: "1.5rem" }} />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TheatreNavbar;
