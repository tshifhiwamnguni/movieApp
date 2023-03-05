import { createContext, useState } from "react";

const CinemaContext = createContext({
  cinemaId: "1",
  movieId: "1",

  _setCinemaId: (cinemaId) => {},
  _setMovieId: (movieId) => {},
});


export function CinemaContextProvider(props) {
  const [_cinemaId, setCinemaId] = useState();
  const [_movieId, setMovieId] = useState();
  function setCinemaIdHandler(cinemaId) {
    setCinemaId((prevId) => {
      return (prevId = cinemaId);
    });
  }
  function setMovieIdHandler(movieId) {
    setMovieId((prevId) => {
      return (prevId = movieId);
    });
  }

  const context = {
    cinemaId: _cinemaId,
    movieId: _movieId,
    _setCinemaId: setCinemaIdHandler,
    _setMovieId: setMovieIdHandler,
  };
  return (
    <CinemaContext.Provider value={context}>
      {props.children}
    </CinemaContext.Provider>
  );
}






export default CinemaContext;
