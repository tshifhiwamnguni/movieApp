import React, { useState, useEffect, useMemo } from "react";
import { CardSubtitle, CardText, CardTitle } from "reactstrap";
import womanKing from "../../../assets/womanKing.jpeg";
import { MdDelete } from "react-icons/md";
import Pagination from "../pagination/pagination";
import "./reviews.css"
import useReview from "../reviewStore";
import filterStorer from "../filterStore";
import axios from "axios";

// import Moment from "moment"
const API = "https://strapi-movie-app.onrender.com/api";

let PageSize = 10;
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [stars, setStars] = useState();
  const [timestamp, setTimestamp] = useState("2023-01-17");
  const [comment, setComment] = useState("Great movie");
  const [username, setUsername] = useState("Fhatuwani");
  const [title, setTitle] = useState("Avatar the lost city");
  const [poster, setPoster] = useState("../../../assets/womanKing.jpeg");

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewPerPage, setReviewPerPage] = useState(12);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState([]);
  const [restitle, setRestitle] = useState("");
  const movieTitle = filterStorer(state => state.reviewMovie);
  console.log(movieTitle)
 
  console.log(totalPages)


  let index = 2;
  let arr = [];



  const getReviews = () => {
    axios
      .get(
        "https://strapi-movie-app.onrender.com/api/review-cinemas?populate=*"
      )
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
        setTotalPages(response.data.data.filter(filterMovies));
       
        setReviews(response.data.data[1].attributes.comment);
        setTimestamp(response.data.data[1].attributes.createdAt);
        setStars(response.data.data[0].attributes.rating);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(reviews);

  const filterMovies = (element) => {
    return element.attributes.movie.data.attributes.title === movieTitle;
  }

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
  }

  const lastPageIndex = currentPage * reviewPerPage;
  const firstPageIndex = lastPageIndex - reviewPerPage;
  const currentReview = data.slice(firstPageIndex, lastPageIndex);
  console.log(currentReview)

  useEffect(() => {
    getReviews();
    setRestitle(localStorage.getItem("Mtitle"));
    console.log(restitle);
  }, []);

  return (
    <div className="mt-24">
      {/* <Home /> */}
      <h1 className="text-4xl mx-auto text-center xl:text-4xl font-semibold leading-6 text-gray-800  block">
        Movie Reviews
      </h1>

      <div className="container">
        <form>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname"></label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-4 gap-16 w-fit px-8 mx-auto">
        {currentReview
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.attributes.movie.data.attributes.title.toLowerCase()
                  .includes(search);
          })
          .map((item) => (
            <div
              key={item.id}
              className="card w-72 bg-base-300 shadow-xl text-primary-content"
            >
              <div className="card-body ">
                {/* <img
                  className="h-1/2 md:w-full"
                  src={item.attributes.movie.data.attributes.movieImage}
                  alt="dress"
                /> */}
                <CardTitle tag="h1" className="text-center text-2xl">
                  {item.attributes.movie.data.attributes.title}
                </CardTitle>
                <div className="flex justify-between">
                  <CardSubtitle className="text-muted text-xl" tag="h6">
                    {item.attributes.users_permissions_user.data.attributes.firstname}
                  </CardSubtitle>
                  <div className="rating text-2xl">
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
                  "
                  {item.attributes.comment ||
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                  "
                </CardText>
                <CardText>
                  <small className="text-muted text- flex justify-end">
                    {/* {item.attributes.createdAt || "3 mins ago"} */}
                    {new Date(
                            item.attributes.createdAt
                          ).toLocaleDateString("ven-ZA", {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                  </small>
                </CardText>
                {/* <MdDelete className="text-2xl ml-auto text-rose-400" /> */}
              </div>
            </div>
          ))}
      </div>

      <Pagination
        totalReviews={data.length}
        reviewsPerPage={reviewPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Reviews;
