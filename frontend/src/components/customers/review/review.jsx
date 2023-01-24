import { useState } from "react";
import womenKing from "../../../assets/womanKing.jpeg"
import axios from "axios";
const API = "https://strapi-movie-app.onrender.com/api";

function Review() {

    const [review, setReview] = useState('');
    const [firstname, setFirstname] = useState('');
    const [rating, setRating] = useState(1);

    axios.get(`${API}/review-cinemas`).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });

    const addReview = () => {
        console.log(review)
        console.log(rating)

        axios.post(`${API}/review-cinemas`, {
                    comment: review,
                    rating: rating
          }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    console.log(rating);
    console.log(review);
    console.log(firstname);

    return (
        <>
            <h2 className="h-12 w-auto text-center text-3xl font-bold text-gray-900 mt-8">Add Review</h2>
            <div className="flex min-h-full items-center justify-center py-6 px-4 sm:px-6 lg:px-8">

                <div className="w-full max-w-md space-y-8">
                    <div className="flex flex-row gap-4 border-4 rounded-md px-4 py-4">
                        <img className="h-12 w-16" src={womenKing} alt="movie poster" />
                        <h2 className="h-12 w-auto text-center text-xl font-bold text-gray-900">Pirates of the carribean</h2>

                    </div>
                    <form className="mt-2 border-4 px-8 rounded-md py-8 space-y-6" >


                        <div className="flex gap-2 flex-col rounded-md shadow-sm">

                            <div>
                                <label className="text-xl">Firstname</label>
                                <input id="firstname" name="firstname" type="text" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="enter first name" onChange={(e) => setFirstname(e.target.value)} value={firstname} />
                            </div>

                            <div>
                                <label className="text-lg">Review</label>
                                <textarea id="review" rows="4" name="review" type="text" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="comments" onChange={(e) => setReview(e.target.value)} value={review} />
                            </div>

                            <div className="form-control w-full max-w-xs">

                                <span className="label-text">Rating</span>


                                <input id="firstname" name="firstname" type="number" min="1" max="5" className="relative block appearance-none rounded-none rounded-b-md border border-gray-300 px-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="No between 1 -5" onChange={(e) => setRating(e.target.value)} value={rating} />
                            </div>
                        </div>

                        <div className="bg-gray-50 flex justify-end gap-2">
                            <button className="btn text-white bg-rose-500 rounded ">Cancel Review</button>
                            <button type="submit" className="btn text-white bg-sky-500 rounded" onSubmit={addReview}>Add Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
}

export default Review;