import womenKing from "../../../assets/womanKing.jpeg";
import { BsFillPlusSquareFill } from "react-icons/bs"
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";

export default function Example() { 
    const [snack , setSnack] = useState('')
    const [price , setPrice] = useState(0)
    const [quantity , setQuantity] = useState(0)

    const [mediumcombo , setMediumcombo] = useState('')
    const [mediumblockbuster , setMediumblockbuster] = useState('')
    // const [mediumcombo , setMediumcombo] = useState('')

    console.log(price)

    const getOrders = () => {
        axios.get('https://strapi-movie-app.onrender.com/api/cinema-orders?populate=*').then((response) => {
            console.log(response)
            getSnack(response.data.data[0].attributes.cinema_snacks.data[0].attributes.name)
            getPrice(response.data.data[0].attributes.cinema_snacks.data[0].attributes.price)
            getQuantity(response.data.data[0].attributes.quantity)
        }).catch((error) => {
            console.log(error)
        })
    }

    const getSnack = (information) => {
        setSnack(information)
    }
    const getPrice = (info) => {
        setPrice(info)
    }
    const getQuantity = (info) => {
        setQuantity(info)
    }

    useEffect(() => {
        getOrders();
    })
  return (
    <>
      <div className="mx-auto bg-blue-400 p-4">
        <h1 className="text-center text-6xl font-bold">Cart</h1>
      </div>
      <div className="mx-auto w-4/5">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="flex col-span-3 sm:col-span-2 gap-4">
                      <label
                        htmlFor="company-website"
                        className="block text-xl font-medium text-gray-700"
                      >
                        <img
                          className="h-12 w-16"
                          src={womenKing}
                          alt="movie poster"
                        />
                      </label>
                      <div className="mt-1 flex rounded shadow-sm">
                          <h2 className="h-12 w-auto text-center text-2xl font-bold text-gray-900">
                            Pirates of the carribean
                          </h2>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-2xl font-medium text-gray-700">Cinema:</label>
                    <div className="mt-1">
                      <p className="mt-2 text-2xl text-gray-500">Menlyn park</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-2xl font-medium text-gray-700">Items:</label>
                    <div className="mt-1 flex justify-between">
                      <p className="mt-2 text-2xl text-gray-500">
                        1 x Regular 2D
                      </p>
                      <p className="mt-2 text-2xl text-gray-500">R100,00</p>
                    </div>
                    <div className="mt-1 flex justify-between">
                      <p className="mt-2 text-2xl text-gray-500">
                        {quantity} x {snack}
                      </p>
                      <p className="mt-2 text-2xl text-gray-500">R{price},00</p>
                    </div>

                    <div className="mt-1 flex justify-between">
                      <p className="mt-2 text-2xl text-gray-500">Total:</p>
                      <p className="mt-2 text-2xl text-gray-500">R195,00</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 text-2xl py-4 px-8">
                    Checkout
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mx-auto sm:mt-0 w-4/5">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className=" gap-6">
                  <div className="col-span-6 sm:col-span-3 mx-auto py-4">
                    <label className="block text-4xl font-medium text-gray-700 text-center">
                      Add Extras?
                    </label>
                  </div>

                  <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-3 gap-1">
                    <div className="card h-fit w-96 bg-primary text-primary-content">
                      <div className="card-body text-center">
                        <h2 className="card-title flex justify-center">
                          {mediumcombo}
                        </h2>
                        <img
                          className="h-1/2 w-full"
                          src='https://numetro.co.za/wp-content/uploads/concession_images/A000006871.png'
                          alt="movie poster"
                        />
                        <p className=" text-4xl text-gray-500">R95,00</p>
                        <button type="button"
                          className="flex items-center justify-evenly p-4 rounded-md border border-transparent bg-green-800">
                            <BsFillPlusSquareFill className="text-2xl"/> 
                          <h1 className="text-2xl">Add To Basket</h1>
                        </button>
                      </div>
                    </div>

                    <div className="card h-fit w-96 bg-primary text-primary-content">
                      <div className="card-body text-center">
                        <h2 className="card-title flex justify-center">
                          Feature Combo Medium 
                        </h2>
                        <img
                          className="h-1/2 w-full"
                          src='https://numetro.co.za/wp-content/uploads/concession_images/A000006868.png'
                          alt="movie poster"
                        />
                        <p className=" text-4xl text-gray-500">R95,00</p>
                        <button type="button"
                          className="flex items-center justify-evenly p-4 rounded-md border border-transparent bg-green-800">
                            <BsFillPlusSquareFill className="text-2xl"/> 
                          <h1 className="text-2xl">Add To Basket</h1>
                        </button>
                      </div>
                    </div>

                    <div className="card h-fit w-96 bg-primary text-primary-content">
                      <div className="card-body text-center">
                        <h2 className="card-title flex justify-center">
                          Feature Combo Large
                        </h2>
                        <img
                          className="h-1/2 w-full"
                          src='https://numetro.co.za/wp-content/uploads/concession_images/A000006872.png'
                          alt="movie poster"
                        />
                        <p className=" text-4xl text-gray-500">R95,00</p>
                        <button type="button"
                          className="flex items-center justify-evenly p-4 rounded-md border border-transparent bg-green-800">
                            <BsFillPlusSquareFill className="text-2xl"/> 
                          <h1 className="text-2xl">Add To Basket</h1>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
