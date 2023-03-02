import React, { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";

import CinemaContext from '../../../context/CinemaContext'
import ReactPlayer from "react-player";
import Iframe from "react-iframe";
import { useNavigate } from "react-router-dom";
import  './Movies.css';


function Movies() {

  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useState("");
  
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
  function getMovies(){
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

      console.log(localStorage.getItem("PlaceId"));
      console.log(localStorage.getItem("MName"))
      console.log(localStorage.getItem("Location"))
      setCinemaID(localStorage.getItem("PlaceId"))
    
      setMovies(response.data.data);
    })
    .catch((error) => {
      // Handle error.
    });
  }
  useEffect(() => {
getMovies()
    
  }, []);

  useEffect(() => {
    setLoading(true);
    if(query){
    axios
      .get(
        `https://strapi-movie-app.onrender.com/api/movies?populate=*&filters[title][$containsi]=${query}`,
        {
          headers: {
            Authorization: 
            "Bearer c03f2ff3dc732f216fff5ab4e4766d1fc88b820752ff5cc25d47cb4e5e867b67e01f3748cf3d6de665bad7c22f2c995d3f549073874e893ac037685ed2081be326647aac58ae737ccee9dde8d36d56c36f84fe34ecd6e2b42b27dff6662b6e959f420b117d0c3cddcdcf45263bfe82dc75fb854690842ed01bb88f960226d62e",
          },
        }
      )
      .then((movie) => {
        setMovies(movie.data.data);
  
      })
      .catch((error) => {})
      .finally(() => setLoading(false));
    }else{
      getMovies()
    }
  }, [query]);


  function select(index) {
    setModelData(index);
    console.log(index);
    console.log('mdoel , ',modelData);
  }

  


  function selectMovie(data) {
   console.log(data);
     localStorage.setItem('MId', data.id)
    localStorage.setItem('MPrice', data.attributes.price)
    localStorage.setItem('MName', data.attributes.title)
    localStorage.setItem('Image', data.attributes.movieImage)
      // navigate('../book')
   
  }

  function toReviews(){
    navigate('../review')
  }
  return (
    <>
      <div className="mt-24">
      
        <div>
          <h1 className="text-center text-5xl font-bold mb-4">Movies</h1><div className="input-group justify-end">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <div className="container">
            {movies.map((element2,k) => {
              
              return (
                <div key={k}>
                 
               {element2.attributes.cinema.data.id == cinemaID ?
                <div 
                  
                  className="card cardMod red w-96 bg-base-100 shadow-xl"
                >
                  
                  <figure className="px-10 pt-10">
                    <img
                      src={element2.attributes.movieImage}
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{element2.attributes.title}</h2>
                    <div className="layer">
                    {element2.attributes.genres.data.map(
            (el2,i)=>{
               return<div key={i} className=" btn radius genre">{el2.attributes.name}  </div>;
            }
          )}
          </div>

                    <div className="card-actions">
                      <button className="btn btn-primary radius" onClick={()=>{selectMovie(element2)}}>book now</button>
                      <label
                        onClick={() => {
                          console.log('res');
                          select(element2);
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
                          {/* <video
                          width={'966'}
                          controls
                          
                          >

                            <source src="https://youtu.be/G-Cr00UYokU" type="video/mp4"></source>
                          </video> */}


                <p>{modelData.attributes.description}</p>



                          <div className="modal-action">
                          <label  htmlFor="my-modal-5" className="btn radius" onClick={()=>{
                            toReviews()
                          }}>
                              review
                            </label>
                            <label  htmlFor="my-modal-5" className="btn radius">
                             see review
                            </label>
                            <label  htmlFor="my-modal-5" className="btn radius">
                              close
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              :null}
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
