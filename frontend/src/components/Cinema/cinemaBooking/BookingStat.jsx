import React,{useState, useEffect, useRef} from 'react'
import { ToastContainer } from 'react-toastify';

function BookingStat() {
  const [loading, setLoading]= useState(false);

  return (
    <div className="min-h-screen mt-24 overflow-x-scroll">
      <ToastContainer />
      
      <h1 className="text-center font-bold text-3xl mb-4">Booking</h1>
      <div className="overflow-x-auto w-full">
        {loading ? (
          <progress className="progress progress-primary w-full"></progress>
        ) : (
          ""
        )}
        <table className="table w-full z-0">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Size</th>
              <th>Created at</th>
              <th>Updated at</th>
              <th> Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* {snacks.map((snack) => {
              return ( */}
                <tr >
                  <td>
                    {!loading ? (
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <label
                                className="cursor-pointer"
                                htmlFor="my-modal-6"
                                // onClick={() => selectedEdit(snack)}
                              >
                                <img
                                  // src={snack.attributes.snackImage}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="d-flex justify-content-center">
                        <div className="spinner">
                          <div className="bounce1"></div>
                          <div className="bounce2"></div>
                          <div className="bounce3"></div>
                        </div>
                      </div>
                    )}
                  </td>
                  {/* <td>{snack.attributes.name}</td> */}
                  {/* <td>{"R" + snack.attributes.price}</td> */}
                  {/* <td>{snack.attributes.quantity}</td> */}
                  {/* <th>{snack.attributes.snackSize}</th> */}
                  <td>
                    {/* {moment(snack.attributes.createdAt).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )} */}createdAt
                  </td>
                  <td>
                    {/* {moment(snack.attributes.updatedAt).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )} */}upat
                  </td>
                  <th>
                    <div className="space-x-3">
                      <label
                        htmlFor="my-modal-3"
                        className="btn btn-success btn-xs"
                        // onClick={() => selectedEdit(snack)}
                      >
                        Edit
                      </label>
                      <label
                        htmlFor="my-modal-4"
                        className="btn btn-error btn-xs"
                        // onClick={() => selectedEdit(snack)}
                      >
                        Delete
                      </label>
                    </div>
                  </th>
                </tr>
              {/* );
            })} */}
          </tbody>
        </table>
      </div>
      </div>
  )
}

export default BookingStat