import React, { useState } from "react";
import "./star_ratings.css"

const StarRatings = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
   

    console.log(rating);
    
    const parentToChild = () => {
        setRating(rating)
      }
   
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

export default StarRatings;