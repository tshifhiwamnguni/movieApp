import React, { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";

import CinemaContext from '../../../context/CinemaContext'
import ReactPlayer from "react-player";
import Iframe from "react-iframe";
import { useNavigate } from "react-router-dom";
import  './Movies.css';


function Movies() {

  const cinemaCtx = useContext(CinemaContext)
  const [movies, setMovies] = useState([]);
  const [cinemaID,setCinemaID] = useState('')
  const navigate = useNavigate()
  const iframeRef = useRef()
  const initData = {
    id: 1,
    attributes: {
      title: "Avatar: The Lost city",
      duration: 102.2,
      description:
        "It is a movie where they lost their city it tough and rough",
      createdAt: "2023-01-16T17:44:29.314Z",
      updatedAt: "2023-01-17T06:05:41.504Z",
    },
  };

  
  let id=true
  const [modelData, setModelData] = useState(initData);
  useEffect(() => {

    axios
      .get('https://strapi-movie-app.onrender.com/api/movies?populate=*',{
        headers: {
          Authorization:
            "Bearer c03f2ff3dc732f216fff5ab4e4766d1fc88b820752ff5cc25d47cb4e5e867b67e01f3748cf3d6de665bad7c22f2c995d3f549073874e893ac037685ed2081be326647aac58ae737ccee9dde8d36d56c36f84fe34ecd6e2b42b27dff6662b6e959f420b117d0c3cddcdcf45263bfe82dc75fb854690842ed01bb88f960226d62e",
            
  }})
      .then((response) => {
        // Handle success.
        // console.log(response.data.data[1].attributes.cinema.data.attributes.name);
        console.log(response.data.data)
  
        console.log(localStorage.getItem("cinemaId"));
        console.log(localStorage.getItem("cinemaName"))
        console.log(localStorage.getItem("cinemaLocation"))
   
       
        
        setCinemaID(localStorage.getItem("cinemaId"))
      
        setMovies(response.data.data);
      })
      .catch((error) => {
        // Handle error.
      });
  }, []);



  function select(index) {
    setModelData(index);
    console.log(index);
    console.log('mdoel , ',modelData);
  }

  


  function selectMovie(data) {
   console.log(data);
     localStorage.setItem('movieId', data.id)
    localStorage.setItem('moviePrice', data.attributes.price)
    localStorage.setItem('movieName', data.attributes.title)
    localStorage.setItem('movieImage', data.attributes.movieImage)
      navigate('../book')
   
  }
  return (
    <>
      <div className="mt-24">
        <div>
          <h1 className="text-center text-5xl font-bold mb-4">Movies</h1>
          <div className="container">
            {movies.map((element,k) => {
              
              return (
                <div>
                 
               {element.attributes.cinema.data.id == cinemaID ?
                <div 
                  key={k}
                  className="card cardMod red w-96 bg-base-100 shadow-xl"
                >
                  
                  <figure className="px-10 pt-10">
                    <img
                      src={element.attributes.movieImage}
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{element.attributes.title}</h2>
                    <div className="layer">
                    {element.attributes.genres.data.map(
            (el,i)=>{
               return<div key={i} className="genre">{el.attributes.name}  </div>;
            }
          )}
          </div>

                    <div className="card-actions">
                      <button className="btn btn-primary radius" onClick={()=>{selectMovie(element)}}>book now</button>
                      <label
                        onClick={() => {
                          select(element);
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
                            {modelData.attributes.title}
                          </h3>

                          <iframe
                            ref={iframeRef}
                            width="966"
                            height="543"
                            src="https://www.youtube.com/embed/d9MyW72ELq0"
                            title="Avatar: The Way of Water | Official Trailer"
                            frameBorder="0"
                             allow="autoplay"
                          ></iframe>
                <p>{modelData.attributes.description}</p>



                          <div className="modal-action">
                            <label  htmlFor="my-modal-5" className="btn radius">
                              close
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                :<div></div>}
                </div>
              );
            })}{" "}
          </div>
        </div>

      </div>
    </>
  );
}

export default Movies;
