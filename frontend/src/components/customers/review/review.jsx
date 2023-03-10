import { useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Reviews from "../../customers/reviews/reviews";
import axios from "axios";
import PaginatedItems from "../../test/test";
const API = "https://strapi-movie-app.onrender.com/api";


function Review() {
  const reviews = useRef("");
  const ratings = useRef(1);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [poster, setPoster] = useState("");
  // const [movieid, setMovieid] = useState(0)
  // const [movie, setMovie] = useState(0)

  axios
    .get("https://strapi-movie-app.onrender.com/api/review-cinemas?populate=*")
    .then((response) => {
      console.log(response);
      setTitle(response.data.data[0].attributes.movie.data.attributes.title);
      setUsername(
        response.data.data[0].attributes.users_permissions_user.data.attributes
          .username
      );
      setPoster(
        response.data.data[0].attributes.movie.data.attributes.movieImage
      );
      // setMovieid(response.data.data[0].attributes.movie.data.id)
      console.log(response.data.data[0].attributes.movie.data.id);
      // setMovie = response.data.data[0].attributes.movie.data.id
    })
    .catch((error) => {
      console.log(error);
    });

  // const addReview = () => {

  //     axios.post('https://strapi-movie-app.onrender.com/api/review-cinemas',
  //     {rating: ratings, comment: reviews }).then((response) => {
  //         console.log(response);
  //         console.log("response revieved")
  //     }).catch((error) => {
  //         console.log(error);
  //         console.log("error revieved")
  //     });
  // }
  //   console.log(firstname.current.value);
  //   console.log(reviews.current.value);
  //   console.log(ratings.current.value);

  const handleReviewChange = async (event) => {
    console.log(reviews.current.value);
    console.log(ratings.current.value);
  
    const data = {
      data: { rating: ratings.current.value, comment: reviews.current.value },
    };
    event.preventDefault();
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

    // event.preventDefault()
    navigate("../reviews");
  };

  return (
    <div className="mt-24">
      <h2 className="h-12 w-auto text-center text-3xl font-bold text-gray-900 ">
        Add Review
      </h2>
      <div className="flex min-h-full items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-row gap-4 border-4 rounded-md px-4 py-4">
            <img className="h-12 w-16" src={poster} alt="movie poster" />
            <h2 className="h-12 w-auto text-center text-xl font-bold text-gray-900">
              {title}
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
