import { useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Reviews from "../../customers/reviews/reviews";
import axios from "axios";
import PaginatedItems from "../../test/test";
import { useEffect } from "react";
import useReviewStore from "../reviewStore";
import useReview from "../../customers/reviewStore";
import filterStorer from "../filterStore";

const API = "https://strapi-movie-app.onrender.com/api";

function Review() {
  const reviews = useRef("");
  const ratings = useRef(1);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [poster, setPoster] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const movieTitle = useReview(state => state.selectedMovieTitle);
  const moviePoster = useReview(state => state.selectedMovieImage); // get variable data from store
  const movieTitleReview = filterStorer(state => (state.reviewMovie = movieTitle))
  console.log(movieTitleReview)

  const getData = async () => {
    await axios
      .get(
        "https://strapi-movie-app.onrender.com/api/review-cinemas?populate=*"
      )
      .then((response) => {
        console.log(response.data);
        setTitle(response.data.data[0].attributes.movie.data.attributes.title);
        setUsername(
          localStorage.getItem("username")
        );
        setPoster(
          response.data.data[0].attributes.movie.data.attributes.movieImage
        );
        console.log(response.data.data[0].attributes.movie.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  const validate = () => {
    const errors = {};
    if (!ratings.current.value) {
      errors.rating = "No rating added!";
    } else if (ratings.current.value < 1 || ratings.current.value > 5) {
      errors.rating = "Rating must be between 1 and 5!";
    }
    if (!reviews.current.value) {
      errors.comment = "No comment added!";
    }

    console.log(errors);
    setFormErrors(errors);
  };

  const handleReviewChange = async (event) => {
    validate();
    event.preventDefault();
    const data = {
      data: { rating: ratings.current.value, comment: reviews.current.value },
    };
    if (JSON.stringify(formErrors) === '{}') {
      return;
    } else {
      await axios
        .post("https://strapi-movie-app.onrender.com/api/review-cinemas", data)
        .then((response) => {
          console.log(response);
          console.log("response received");
        })
        .catch((error) => {
          console.log(error);
          console.log("error in posting");
        });
      navigate("../reviews");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="mt-24">
      <h2 className="h-12 w-auto text-center text-3xl font-bold text-gray-900 ">
        Add Review
      </h2>
      <div className="flex min-h-full items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-row gap-4 border-4 rounded-md px-4 py-4">
            <img className="h-12 w-16" src={moviePoster} alt="movie poster" />
            <h2 className="h-12 w-auto text-center text-xl font-bold text-gray-900">
              {movieTitle}
            </h2>
          </div>
          
          <form className=" border-4 px-8 rounded-md py-8 space-y-6">
            <div className="flex gap-2 flex-col rounded-md shadow-sm">
              <div>
                <label className="text-xl">Firstname</label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  value={username}
                  readOnly
                />
              </div>

              <div>
                <label className="text-lg" htmlFor="review">
                  Review
                </label>
                <textarea
                  ref={reviews}
                  id="review"
                  rows="4"
                  name="review"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2"
                  placeholder="comments"
                />
              </div>
              <p className="text-rose-900 font-bold">{formErrors.comment}</p>

              <div className="form-control w-full max-w-xs">
                <span className="label-text">Rating</span>

                <input
                  ref={ratings}
                  id="firstname"
                  name="firstname"
                  type="number"
                  min="1"
                  max="5"
                  className="relative block appearance-none rounded-none rounded-b-md border border-gray-300 px-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="No between 1 -5"
                />
              </div>
              <p className="text-rose-900 font-bold">{formErrors.rating}</p>
            </div>

            <div className="bg-gray-50 flex justify-end gap-2">
              <button className="btn text-white bg-rose-500 rounded ">
                Cancel Review
              </button>
              <button
                type="submit"
                className="btn text-white bg-sky-500 rounded"
                onClick={handleReviewChange}
              >
                Add Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Review;
