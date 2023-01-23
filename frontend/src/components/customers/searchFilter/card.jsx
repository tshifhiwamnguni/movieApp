import React from 'react';
import darkMagicianGirl from "../../../assets/dark_magician_girl.jpeg"

function Card({person}) {
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img className="br-100 h3 w3 dib" alt={person.name} src={darkMagicianGirl} />
      <div>
        <h2>{person.name}</h2>
        <p>{person.email}</p>
      </div>
    </div>
  );
}

export default Card;