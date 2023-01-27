import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./CinemaList.css";
import CinemaContext from "../../../context/CinemaContext";
import { useNavigate } from "react-router-dom";

function CinemaList() {
  const cinemaCtx = useContext(CinemaContext);
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  const initData = {
    id: 1,
    attributes: {
      city: "Johannesburg",
      name: "The Watcher",
      postalCode: "2092",
      province: "Gauteng",
      surbub: "Auckland pack",
    },
  };
  const [modelData, setModelData] = useState(initData);
  useEffect(() => {
    console.log("on");
    axios
      .get("https://strapi-movie-app.onrender.com/api/cinemas", {
        headers: {
          Authorization:
            "Bearer c03f2ff3dc732f216fff5ab4e4766d1fc88b820752ff5cc25d47cb4e5e867b67e01f3748cf3d6de665bad7c22f2c995d3f549073874e893ac037685ed2081be326647aac58ae737ccee9dde8d36d56c36f84fe34ecd6e2b42b27dff6662b6e959f420b117d0c3cddcdcf45263bfe82dc75fb854690842ed01bb88f960226d62e",
        },
      })
      .then((response) => {
        // Handle success.
        console.log(response.data.data);
        setMovies(response.data.data);
      })
      .catch((error) => {
        // Handle error.
        console.log(error);
      });
  }, []);

  function select(index) {
    setModelData(movies[index - 1]);
    console.log(index - 1);
  }

  function setCinemaId(id) {
  localStorage.setItem("cinemaId", id)
    navigate("../movieList");
  }

  function close() {
    // console.log(cinemaCtx.cinemaName);
  }

  return (
    <div className="mt-24 ">
      <div>
        <h1 className="text-center text-5xl font-bold mb-4">Cinema list</h1>
        <div className="container">
          {movies.map((element) => {
            return (
              <div
                key={element.id}
                className="card cardMod w-96 bg-base-100 shadow-xl"
              >
                <figure className="">
                  <img
                    src="https://placeimg.com/400/225/arch"
                    alt="Shoes"
                    className=""
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{element.attributes.name}</h2>

                  <div className="card-actions">
                    <button
                      className="btn btn-primary radius"
                      onClick={() => {
                        setCinemaId(element.id);
                      }}
                    >
                      Select
                    </button>
                    <label
                      onClick={() => {
                        select(element.id);
                      }}
                      htmlFor="my-modal-5"
                      className="btn radius"
                    >
                      view details
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my-modal-5"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg">
                          Cinema: {modelData.attributes.name}
                        </h3>
                        <h3 className="font-bold text-lg">
                          city: {modelData.attributes.city}
                        </h3>
                        <h3 className="font-bold text-lg">
                          Postal code:{modelData.attributes.postalCode}
                        </h3>
                        <h3 className="font-bold text-lg">
                          province: {modelData.attributes.province}
                        </h3>
                        <h3 className="font-bold text-lg">
                          suburb: {modelData.attributes.surbub}
                        </h3>

                        <div className="modal-action">
                          <label
                            htmlFor="my-modal-5"
                            className="btn"
                            onClick={close}
                          >
                            close
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
}

export default CinemaList;
