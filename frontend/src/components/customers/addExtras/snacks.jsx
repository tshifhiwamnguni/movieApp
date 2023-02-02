import womenKing from "../../../assets/womanKing.jpeg";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { useState, useEffect } from "react";
import "./snacks.css";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Booking from "../../Booking/Booking";
export default function Example() {
  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      navigate("/login/", { replace: true });
    }
  });

  const [snack, setSnack] = useState();
  const [price, setPrice] = useState(0);
  const [type, setType] = useState();
  const [isAddSnacks, setIsAddSnacks] = useState(false);
  const [seats, setSeats] = useState([]);
  const [placeName, setPlaceName] = useState();
  const [cinemaLocation, setLocation] = useState();
  const [placeId, setPlaceId] = useState();
  const [selectedSnacks, setSelectedSnacks] = useState([]);
  const [movieName, setMovieName] = useState();
  const [movieImage, setMovieImage] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [MId, setMId] = useState();
  const [date, setDate] = useState();
  const [refresh, setRefresh] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://strapi-movie-app.onrender.com/api/cinema-snacks?populate=*",
        {
          headers: {
            Authorization:
              "Bearer c03f2ff3dc732f216fff5ab4e4766d1fc88b820752ff5cc25d47cb4e5e867b67e01f3748cf3d6de665bad7c22f2c995d3f549073874e893ac037685ed2081be326647aac58ae737ccee9dde8d36d56c36f84fe34ecd6e2b42b27dff6662b6e959f420b117d0c3cddcdcf45263bfe82dc75fb854690842ed01bb88f960226d62e",
          },
        }
      )
      .then((res) => {
        setTotalPrice(price * seats.length);
        console.log(res.data.data);
        setSnack(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log("location ", localStorage.getItem("Location"));
    // console.log("id ", localStorage.getItem("PlaceId"));
    // console.log("name ", localStorage.getItem("PlaceName"));

    console.log("seats ", localStorage.getItem("seats"));
    setMId(localStorage.getItem("MId"));
    setDate(localStorage.getItem("date"));
    setLocation(localStorage.getItem("Location"));
    setPlaceId(localStorage.getItem("PlaceId"));
    setPlaceName(localStorage.getItem("PlaceName"));
    setSeats(localStorage.getItem("seats").split(","));
    setPrice(localStorage.getItem("MPrice"));
    setMovieName(localStorage.getItem("MName"));
    setMovieImage(localStorage.getItem("Image"));
    setType(localStorage.getItem("type"));
    setTotalPrice(getTotal());
  }, []);

  function call() {
    setRefresh(!refresh);
    console.log("first");
  }

  useEffect(() => {
    setTotalPrice(getTotal());
    console.log("logger", totalPrice);
  }, [refresh]);

  useEffect(() => {
    function delay() {
      setTimeout(() => {
        call();
      }, 2000);
    }
    delay();
  }, []);

  function selectSnack(props) {
    setSelectedSnacks((selectedSnacks) => [...selectedSnacks, props]);

    // setTotalPrice(getTotal() )
    setRefresh(!refresh);
  }

  function handleDeleteSnack(data) {
    console.log("index ", data);
    let index = selectedSnacks.findIndex((seat) => seat.id === data.id);
    console.log("delete ", index);
    const newElements = [...selectedSnacks];
    newElements.splice(index, 1);
    setSelectedSnacks(newElements);
    setRefresh(!refresh);
  }

  function handleDeleteSeat(data) {
    console.log("data ", data);
    let index = seats.findIndex((seat) => seat === data);
    console.log("delete ", index);
    const newElements = [...seats];
    newElements.splice(index, 1);
    setSeats(newElements);
    setRefresh(!refresh);
  }

  function getTotal() {
    let snacks = getSnackTotal();
    let seats = getSeatTotal();
    let total = seats + snacks;
    return total;
  }

  function getSeatTotal() {
    let seatPrice = price * seats.length;

    return seatPrice;
  }

  function getSnackTotal() {
    let totalSnack = 0;
    selectedSnacks.map((element) => {
      totalSnack += element.attributes.price;
    });
    return totalSnack;
  }

  function book() {
    const token = localStorage.getItem("jwt");
    let decoded = jwt_decode(token);
    let ID = decoded.id;

    let data = {
      data: {
        users_permissions_user: ID,
        movie: MId,
        bookingDate: date,
        cinema: placeId,
        cinema_seat: seats.toString(),
      },
    };

    if (selectedSnacks.length > 0) {
      selectedSnacks.map((element) => {
        let snackData = {
          data: {
            quantity: 1,
            user: ID,
            cinema_snacks: element.id,
            cinema: placeId,
          },
        };

        axios
          .post(
            "https://strapi-movie-app.onrender.com/api/cinema-orders",
            snackData,
            {
              headers: {
                Authorization:
                  "Bearer c03f2ff3dc732f216fff5ab4e4766d1fc88b820752ff5cc25d47cb4e5e867b67e01f3748cf3d6de665bad7c22f2c995d3f549073874e893ac037685ed2081be326647aac58ae737ccee9dde8d36d56c36f84fe34ecd6e2b42b27dff6662b6e959f420b117d0c3cddcdcf45263bfe82dc75fb854690842ed01bb88f960226d62e",
              },
            }
          )
          .then(async (result) => {});
      });
    }

    if (type === "cinema") {
      axios
        .post(
          "https://strapi-movie-app.onrender.com/api/booking-cinemas",
          data,
          {
            headers: {
              Authorization:
                "Bearer c03f2ff3dc732f216fff5ab4e4766d1fc88b820752ff5cc25d47cb4e5e867b67e01f3748cf3d6de665bad7c22f2c995d3f549073874e893ac037685ed2081be326647aac58ae737ccee9dde8d36d56c36f84fe34ecd6e2b42b27dff6662b6e959f420b117d0c3cddcdcf45263bfe82dc75fb854690842ed01bb88f960226d62e",
            },
          }
        )
        .then(async (result) => {
          console.log(result);

          axios
            .post("http://localhost:5252/lol", {
              money: getTotal(),
            })
            .then(async (result) => {
              console.log(result);

              navigate("../client/payment");
            });
        });
    }

    if (type === "theatre") {
      axios
        .post(
          "https://strapi-movie-app.onrender.com/api/booking-theatres",
          data,
          {
            headers: {
              Authorization:
                "Bearer c03f2ff3dc732f216fff5ab4e4766d1fc88b820752ff5cc25d47cb4e5e867b67e01f3748cf3d6de665bad7c22f2c995d3f549073874e893ac037685ed2081be326647aac58ae737ccee9dde8d36d56c36f84fe34ecd6e2b42b27dff6662b6e959f420b117d0c3cddcdcf45263bfe82dc75fb854690842ed01bb88f960226d62e",
            },
          }
        )
        .then(async (result) => {
          console.log(result);

          axios
            .post("http://localhost:5252/lol", {
              money: getTotal(),
            })
            .then(async (result) => {
              console.log(result);

              navigate("../client/payment");
            });
        });
    }
  }

  return (
    <div className="mt-24">
      <div className="mx-auto w-2/5">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="">
        
                    <div className="flex">
                    <div className="lp">
                        <img
                          className="h-42 w-42 img"
                          src={movieImage}
                          alt="movie poster"
                        />
                      </div>


                      <div className=" rp">
                      <label className=" text-2xl font-medium">
                      Name:
                    </label>
                        <div className="">
                          <h1 className=" text-xl">{movieName}</h1>
                        </div>
                     <div>
                    <label className=" text-2xl font-medium">
                      Cinema:
                    </label>
                    <div className="mt-1">
                      <p className="mt-2 text-xl ">
                        <h1></h1>{placeName} - {cinemaLocation}
                      </p>
                    </div>
                  </div>
                      </div>
                    
                    </div>
                  </div>

                  

                  <div>
                    <label className=" text-2xl font-medium text-gray-700">
                      Items:
                    </label>
                    <div>
                      {seats.map((element, i) => {
                        return (
                          <div key={i}>
                            <div className=" flex justify-between p-1">
                              <p className="flex text-2xl text-gray-500">
                                <MdDeleteOutline
                                  onClick={() => {
                                    handleDeleteSeat(element);
                                    setRefresh(!refresh);
                                  }}
                                  className="Md"
                                />{" "}
                                seat - {element}
                              </p>
                              <p className=" text-2xl text-gray-500">R100,00</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <h1 className="h-12 w-auto text-center text-2xl font-bold text-gray-900">
                        snacks
                      </h1>

                      <div>
                        {selectedSnacks.map((element, i) => {
                          return (
                            <div key={i}>
                              <div className=" flex justify-between p-1">
                                <p className="flex text-2xl text-gray-500">
                                  <MdDeleteOutline
                                    onClick={() => {
                                      handleDeleteSnack(element);
                                    }}
                                    className="Md"
                                  />{" "}
                                  {element.attributes.name},{" "}
                                  {element.attributes.snackSize}
                                </p>

                           
                                <p className=" text-2xl text-gray-500">
                                  R{element.attributes.price}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div></div>
                      <div>
                        <span className="text-2xl font-bold text-gray-900">
                          Total
                        </span>
                        <br />R{totalPrice}{" "}
                      </div>
                    </div>
                  </div><div className="flex ">
                  <div className=" px-4 text-left py-3 sm:px-6">
                    <label
                      className="inline-flex items-center cursor-pointer rounded-md border border-transparent bg-indigo-600 text-2xl py-4 px-8"
                      onClick={() => {
                        setIsAddSnacks(!isAddSnacks);
                        console.log(isAddSnacks);
                      }}
                    >
                      {isAddSnacks ? "hide snacks" : "shows snacks"}
                    </label>
                  </div>

                  <div className=" px-4 text-right py-3 sm:px-6">
                    <button
                      type="button"
                      onClick={book}
                      className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 text-2xl py-4 px-8"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
                </div>

                
              </div>
            </form>
          </div>
        </div>
      </div>
      {isAddSnacks ? (
        <div>
          <div className="mx-auto sm:mt-0 w-2/5">
            <div className="md:grid md:grid-cols-2 md:gap-6">
              <div className="mt-5 md:col-span-2 md:mt-0">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className=" gap-6">
                      <div className="col-span-6 sm:col-span-3 mx-auto py-4"></div>

                      <div className="flex flex-wrap">
                        {snack.map((element, i) => {
                          return (
                            <div
                              key={i}
                              className="card mx-auto mb-2 h-fit w-56 text-center bg-primary text-primary-content"
                            >
                              <div className="card-body flex flex-wrap ">
                                <h2> {element.attributes.name}</h2>
                                <h2 className="card-title flex justify-center">
                                  {element.attributes.snackSize}
                                </h2>

                                <img
                                  className="h-1/2 w-24 text-center"
                                  src={element.attributes.snackImage}
                                  alt="movie poster"
                                />
                                <p className=" text-2xl text-gray-500">
                                  R{element.attributes.price}
                                </p>
                                <button
                                  type="button"
                                  className="flex items-center justify-evenly p-4 rounded-md border border-transparent bg-green-800"
                                >
                                  <BsFillPlusSquareFill className="text-2xl" />
                                  <h1
                                    onClick={() => {
                                      setTotalPrice(getTotal());
                                      selectSnack(element);
                                    }}
                                  >
                                    Add snacks
                                  </h1>
                                </button>
                              </div>{" "}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
