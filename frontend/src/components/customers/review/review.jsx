import womenKing from "../../../assets/womanKing.jpeg"
import StarRating from "../starrating/starrating"

function Review() {
    return (
        <>
            <h2 className="h-12 w-auto text-center text-3xl font-bold text-gray-900 mt-8">Add Review</h2>
            <div className="flex min-h-full items-center justify-center py-6 px-4 sm:px-6 lg:px-8">

                <div className="w-full max-w-md space-y-8">
                    <div className="flex flex-row gap-4 border-4 rounded-md px-4 py-4">
                        <img className="h-12 w-16" src={womenKing} alt="movie poster" />
                        <h2 className="h-12 w-auto text-center text-xl font-bold text-gray-900">The Woman King</h2>

                    </div>
                    <form className="mt-2 border-4 px-8 rounded-md py-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />

                        <div className="flex gap-2 flex-col rounded-md shadow-sm">
                            <div>
                                <label className="text-lg">Rating</label>
                                <StarRating required />
                            </div>

                            <div>
                                <label className="text-lg">Review</label>
                                <textarea id="review" rows="4" name="review" type="text" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="comments" />
                            </div>

                            <div>
                                <label className="text-xl">Firstname</label>
                                <input id="firstname" name="firstname" type="text" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="enter first name" />
                            </div>
                        </div>

                        <div class="bg-gray-50 flex justify-end gap-2">
                            <button className="btn text-white bg-rose-500 rounded ">Cancel Review</button>
                            <button className="btn text-white bg-sky-500 rounded">Add Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
}

export default Review;