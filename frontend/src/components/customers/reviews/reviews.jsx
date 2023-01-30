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
    axios.get("https://strapi-movie-app.onrender.com/api/review-cinemas?populate=*")
      .then((response) => {
        console.log(response);
        setReviews(response.data.data[1].attributes.comment)
        setTimestamp(response.data.data[1].attributes.createdAt)
        setStars(response.data.data[1].attributes.rating)
      }).catch((error) => {
        console.log(error);
      });
  };
  console.log(reviews)

  const Greeting = (props) => {
    if (props.rating === 5) {
        return <CardSubtitle tag="h5">⭐ ⭐ ⭐ ⭐ ⭐ </CardSubtitle>
    } else if (props.rating === 4) {
        return <CardSubtitle tag="h5">⭐ ⭐ ⭐ ⭐ </CardSubtitle>;
    } else if (props.rating === 4) {
        return <CardSubtitle tag="h5">⭐ ⭐ ⭐ </CardSubtitle>;
    } else if (props.rating === 4) {
        return <CardSubtitle tag="h5">⭐ ⭐ </CardSubtitle>;
    } else {
        return <CardSubtitle tag="h5">⭐ </CardSubtitle>;
    }
  }

  useEffect(() => {
    getReviews();
  });

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <h1 className="text-4xl mx-auto text-center xl:text-2xl font-semibold leading-6 text-gray-800 py-8">
                Movie Reviews
            </h1>
            <div className="flex outline p-2 rounded flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
              <div className="w-full md:w-40">
                <img
                  className="w-full hidden md:block"
                  src={womanKing}
                  alt="dress"
                />
                <img className="w-full md:hidden" src={womanKing} alt="dress" />
              </div>
              <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8">
                <div className="w-full flex flex-col justify-start items-start ">
                  <CardTitle tag="h1" className="text-center">
                    {title}
                  </CardTitle>
                  <div className="rating py-1">
                    {[...Array(stars || 1)].map((star, index) => {
                      return (
                        <CardSubtitle tag="h5" key={index}>
                          ⭐{" "}
                        </CardSubtitle>
                      );
                    })}
                  </div>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {username || "John Doe"}
                  </CardSubtitle>
                  <div className="reviews-body">
                    <CardText>
                      "
                      {reviews ||
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                      "
                    </CardText>
                    <CardText>
                      <small className="text-muted text-bold">
                        {/* <Moment from="2015-04-19">1976-04-19T12:59-0500</Moment> */}
                        {timestamp || "3 mins ago"}
                      </small>
                    </CardText>
                    {/* <Greeting rating={stars}/> */}
                  </div>
                </div>

                <div className="flex justify-end space-x-8 items-end w-full">
                  <MdDelete className="text-2xl text-rose-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
