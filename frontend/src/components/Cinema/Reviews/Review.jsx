import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API, TOKEN } from "../../environment/constant";
import "./rev.css";

function Review() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState();

  //   console.log(movieId);

  const getMovie = async () => {
    setLoading(true);
    axios
      .get(`${API}/movies/${movieId}?populate=genres`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((mov) => {
        // console.log(mov.data.data);
        setMovie(mov.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  async function handleNextPage() {
    setPage(page + 1);
  }

  async function handlePreviousPage() {
    setPage(page - 1);
  }

  //   get pages
  const getPages = async () => {
    await axios
      .get(
        `${API}/review-cinemas?populate=*&filters[movie]=${movieId}&pagination[pageSize]=6`
      )
      .then((rev) => {
        // console.log(rev.data.meta.pagination.pageSize);
        setPageCount(rev.data.meta.pagination.pageSize);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getReviews();
  }, [page]);
  // get reviews for cinema
  const getReviews = async (pages = 1) => {
    setLoading(true);
    console.log(page);

    await axios
      .get(
        `${API}/review-cinemas?populate=*&filters[movie]=${movieId}&pagination[page]=${page}&pagination[pageSize]=6`
      )
      .then((rev) => {
        // console.log(rev.data);
        setReviews(rev.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getMovie();
    getPages();
  }, []);

  return (
    <div className="hero min-h-screen mt-24">
      <div className="card card-compact bg-base-200 w-full shadow-xl">
        <div className="card-body">
          <h3 className=" card-title text-center font-bold text-4xl">Reviews</h3>
          <div className="flex justify-center">
            <div className="mt-5">
              {!loading ? (
                <div className="flex justify-center">
                  <div className="avatar">
                    <div className="w-36 ">
                      <img src={movie.attributes?.movieImage} alt="Avatar" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center">
                  <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                  </div>
                </div>
              )}
              <h2 className="font-bold mt-1 text-2xl text-center">
                {movie.attributes?.title}
              </h2>
            </div>
          </div>
          <div className="flex justify-center gap-1 mt-2">
            {movie.attributes?.genres.data.map((g) => (
              <span key={g.id} className="badge badge-primary">
                {g.attributes.name}
              </span>
            ))}
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3 py-4">
            {reviews.map((revv) => {
              return (
                <div
                  lazy="true"
                  key={revv.id}
                  className="card card-compact glass z-10"
                >
                  {!loading ? (
                    <div className="card-body">
                      <div className="flex gap-3">
                        <div className="items-center space-x-3">
                          <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-14">
                              <span className="text-3xl">
                                {revv.attributes.users_permissions_user?.data.attributes.firstname
                                  ?.slice(0, 1)
                                  ?.toUpperCase()}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex-row">
                          <h2 className="card-title">
                            {
                              revv.attributes.users_permissions_user?.data
                                .attributes.firstname
                            }
                          </h2>
                          <div className="flex-row rating gap-1">
                            <span className="font-bold">Rating: </span>
                            <span className="badge badge-primary font-bold">
                              {revv.attributes.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="font-bold text-2xl">
                        {revv.attributes.comment}
                      </p>
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <hr />
          <div className="flex gap-3 justify-center mt-3">
            <button
              className="btn btn-primary glass"
              onClick={handlePreviousPage}
              disabled={page === 1}
            >
              Previous
            </button>
            <button className="btn btn-primary glass" onClick={handleNextPage} disabled={page === pageCount}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
