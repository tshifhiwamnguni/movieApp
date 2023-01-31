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

  // const Greeting = (props) => {
  //   if (props.rating === 5) {
  //       return <CardSubtitle tag="h5">⭐ ⭐ ⭐ ⭐ ⭐ </CardSubtitle>
  //   } else if (props.rating === 4) {
  //       return <CardSubtitle tag="h5">⭐ ⭐ ⭐ ⭐ </CardSubtitle>;
  //   } else if (props.rating === 4) {
  //       return <CardSubtitle tag="h5">⭐ ⭐ ⭐ </CardSubtitle>;
  //   } else if (props.rating === 4) {
  //       return <CardSubtitle tag="h5">⭐ ⭐ </CardSubtitle>;
  //   } else {
  //       return <CardSubtitle tag="h5">⭐ </CardSubtitle>;
  //   }
  // }

  useEffect(() => {
    getReviews();
  },[]);

  return (
    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
      <h1 className="text-4xl mx-auto text-center xl:text-2xl font-semibold leading-6 text-gray-800 py-8">
        Movie Reviews
      </h1>

      <div className="flex outline p-2 rounded flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex outline p-2 rounded flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full "
          >
            <div className="w-full md:w-40">
           
              <img
                className="w-full md:w-40"
                src={item.attributes.movie.data.attributes.movieImage}
                alt="dress"
              />
            </div>
            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full">
              <div className="w-full flex flex-col justify-start items-start ">
              <CardTitle tag="h1" className="text-center">
                    {item.attributes.movie.data.attributes.title}
                  </CardTitle>
                <div className="reviews-body flex align-baseline gap-2">
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
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

                <div className="reviews-body">
                  <CardText>
                    "
                    {item.attributes.comment ||
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                    "
                  </CardText>
                  <CardText>
                    <small className="text-muted text-bold">
                      {item.attributes.createdAt || "3 mins ago"}
                    </small>
                  </CardText>
                </div>
              </div>
              <div className="flex justify-end space-x-2 items-end w-full">
                <MdDelete className="text-2xl text-rose-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
