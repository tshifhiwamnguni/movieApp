import React, { useState, useEffect } from "react";
import { CardSubtitle, CardText, CardTitle } from "reactstrap";
import womanKing from "../../../assets/womanKing.jpeg";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import axios from "axios";
// import Moment from "moment"
const API = "https://strapi-movie-app.onrender.com/api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [stars, setStars] = useState();
  const [timestamp, setTimestamp] = useState("2023-01-17");
  const [comment, setComment] = useState("Great movie");
  const [username, setUsername] = useState("Fhatuwani");
  const [title, setTitle] = useState("Avatar the lost city");
  const [poster, setPoster] = useState("../../../assets/womanKing.jpeg");

  const [data, setData] = useState([]);

  let index = 2;
  let arr = [];

  const StarRatings = () => {
    const [rating, setRating] = useState();
    const [hover, setHover] = useState();
    console.log(rating);
    const parentToChild = () => {
      setRating(rating);
    };
    return (
      <div className="star-rating text-2xl">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => parentToChild()}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };

  const getReviews = () => {
    axios
      .get(
        "https://strapi-movie-app.onrender.com/api/review-cinemas?populate=*"
      )
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
        setReviews(response.data.data[1].attributes.comment);
        setTimestamp(response.data.data[1].attributes.createdAt);
        setStars(response.data.data[0].attributes.rating);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(reviews);

  useEffect(() => {
    getReviews();
  },[]);

  return (
      <>
      <h1 className="text-4xl mx-auto text-center xl:text-2xl font-semibold leading-6 text-gray-800 py-8  block">Movie Reviews</h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-5 gap-1 w-fit px-8 mx-auto">

        {data.map((item) => (
          <div key={item.id} className="card w-64 bg-primary text-primary-content">
            <div className="card-body text-center">
            <img
                className="h-1/2"
                src={item.attributes.movie.data.attributes.movieImage}
                alt="dress"
              />
              <CardTitle tag="h1" className="text-center">
                    {item.attributes.movie.data.attributes.title}
              </CardTitle>
            <div className="flex justify-between">
            <CardSubtitle className="text-muted" tag="h6">
                    { "Guest user"}
                  </CardSubtitle>
                  <div className="rating">
                    {[...Array(item.attributes.rating || 1)].map(
                      (star, index) => {
                        return (
                          <CardSubtitle tag="h5" key={index}>
                            ⭐{" "}
                          </CardSubtitle>
                        );
                      }
                    )}
                  </div>
            </div>
            <CardText className="flex justify-start">
              "{item.attributes.comment || "Lorem ipsum dolor sit amet consectetur adipisicing elit."}"
            </CardText>
            <CardText>
              <small className="text-muted text-bold">
                      {item.attributes.createdAt || "3 mins ago"}
              </small>
            </CardText>
            <MdDelete className="text-2xl ml-auto text-rose-400" />
            </div>
          </div>
        ))}

      </div>
      </>
  );
};

export default Reviews;
