import React, {useState, useEffect} from "react";
import womanKing from "../../../assets/womanKing.jpeg"
import { MdModeEditOutline, MdDelete } from 'react-icons/md';
import axios from "axios"
const API = "https://strapi-movie-app.onrender.com/api";

const Reviews = () => {
    const [reviews, setReviews]= useState([]);

    function getReviews(){
        axios.get(`${API}/review-cinemas`).then((response) => {
            console.log(response.data);
            
        }).catch((error) => {
            console.log(error);
        });
    }
    
    useEffect(() => {
        getReviews();
    })

    return (
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">

                        <h1 className="text-4xl mx-auto text-center xl:text-2xl font-semibold leading-6 text-gray-800 py-8">Customer’s Cart</h1>
                        <div className="flex outline p-2 rounded flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                       {reviews.map(() => {

                        return (
                            <>
                            <div className="w-full md:w-40">
                                <img className="w-full hidden md:block" src={womanKing} alt="dress" />
                                <img className="w-full md:hidden" src={womanKing} alt="dress" />
                            </div>
                            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8">
                                <div className="w-full flex flex-col justify-start items-start ">
                                    <h3 className="text-lg text-center md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800 py-1"> - Nu metro VIP @ Waterfront</h3>
                                    <div className="rating py-1">
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    </div>
                                    <h3 className="text-xl xl:text-md font-semibold leading-6 text-gray-800">Fhatuwani - 04/01/2023</h3>
                                    <div className="flex justify-start items-start flex-col space-x-8 w-full py-2">
                                        <p className="text-sm leading-none text-gray-800 ">
                                            {}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-end space-x-8 items-end w-full">

                                    <p className="text-sm leading-none text-gray-800 flex gap-8"><MdModeEditOutline className="outline rounded text-2xl text-yellow-500" /> <MdDelete className="outline rounded text-2xl text-rose-500" /></p>
                                </div>
                            </div>
                            </>
                        );
                       })}

                        
                            <div className="w-full md:w-40">
                                <img className="w-full hidden md:block" src={womanKing} alt="dress" />
                                <img className="w-full md:hidden" src={womanKing} alt="dress" />
                            </div>
                            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8">
                                <div className="w-full flex flex-col justify-start items-start ">
                                    <h3 className="text-lg text-center md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800 py-1">The Woman King - Nu metro VIP @ Waterfront</h3>
                                    <div className="rating py-1">
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    </div>
                                    <h3 className="text-lg :text-md font-semibold leading-6 text-gray-800">Fhatuwani</h3>
                                    <h4 className=" :text-md font-semibold leading-6 text-gray-800">04/01/2023</h4>
                                    <div className="flex justify-start items-start flex-col space-x-8 w-full py-2">
                                        <p className="text-sm leading-none text-gray-800 ">
                                            What an amazing experience we had. We went to watch Star Wars: The Last Skywalker at the VIP cinema at the Waterfront in December. Before we went in, we ordered 3 Long Island Ice Teas that should be brought to us every hour. The manageress, Naso Mluma, personally took it on, and our drinks were brought into the cinema on time, and were delicious (so delicious we couldn't remember the end of the movie and had to watch it again!).
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-end space-x-8 items-end w-full">

                                    <p className="text-sm leading-none text-gray-800 flex gap-8"><MdModeEditOutline className="outline rounded text-2xl text-yellow-500" /> <MdDelete className="outline rounded text-2xl text-rose-500" /></p>
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
