import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { BiRename } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import {AiFillLock} from "react-icons/ai"
import axios from "axios";
import { API } from "../../environment/constant";
import { getToken } from "../../environment/helpers";
import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";


function CinemaForm() {
    const [password, setPassword] =useState(0)
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [cellphone, setPhone] = useState("");
    const [isNext, setIsNext] = useState(true);


    //cinema reg



    const [CinemaName, setCinemaName] =useState()
    const [city, setCity] = useState("");
    const [suburb, setSuburb] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [province, setProvince] = useState();

    const [cinemaId, setCinemaId] = useState();
    const navigate = useNavigate()
   

    
  const addCinema = async (e) => {
   
      e.preventDefault();
      const data = {
        data:{
        name: CinemaName,
        city:city,
        surbub: suburb,
        postalCode: postalCode,
        province: province
        }
      };
      
      console.log(data);

      axios
      .post('https://strapi-movie-app.onrender.com/api/cinemas',data,
      {
        headers: {
          Authorization:
            "Bearer c03f2ff3dc732f216fff5ab4e4766d1fc88b820752ff5cc25d47cb4e5e867b67e01f3748cf3d6de665bad7c22f2c995d3f549073874e893ac037685ed2081be326647aac58ae737ccee9dde8d36d56c36f84fe34ecd6e2b42b27dff6662b6e959f420b117d0c3cddcdcf45263bfe82dc75fb854690842ed01bb88f960226d62e",
        },
      }
      )
      .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log(response);
        setCinemaId(response.id)
        setIsNext(false)
  
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
    
  };

  function addAdmin(e){
    e.preventDefault();

    const data2 = {
      cellphone: cellphone,
      email:email,
      username: name,
      password: password,
      role: 5,
      cinema: cinemaId
    };
    console.log(data2);

    axios
    .post('https://strapi-movie-app.onrender.com/api/users',data2,
    {
      headers: {
        Authorization:
          "Bearer c03f2ff3dc732f216fff5ab4e4766d1fc88b820752ff5cc25d47cb4e5e867b67e01f3748cf3d6de665bad7c22f2c995d3f549073874e893ac037685ed2081be326647aac58ae737ccee9dde8d36d56c36f84fe34ecd6e2b42b27dff6662b6e959f420b117d0c3cddcdcf45263bfe82dc75fb854690842ed01bb88f960226d62e",
      },
    }
    )
    .then(response => {
      // Handle success.
      console.log('Well done!');
      console.log(response);
      navigate('../login')
  

    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error.response);
    });
  


  }


  return (


    <div>


     {isNext ? 
    <div className="hero min-h-screen flex justify-center align-middle">
    <div className="card w-96 card-compact bg-base-100 shadow-xl">
      <div className="card-body">
        <h1 className="text-center text-5xl font-bold">Register a cinema</h1>
        <form>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Cinema name</span>
            </label>
            <label className="input-group">
              <span>
                <MdEmail style={{ fontSize: "1.5rem" }} />
              </span>
              <input
                type="text"
                placeholder="info@site.com"
                className="input input-bordered input-primary w-full"
                onChange={(e)=>setCinemaName(e.target.value)}
            value={CinemaName}
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">suburb</span>
            </label>
            <label className="input-group">
              <span>
                <BiRename style={{ fontSize: "1.5rem" }} />
              </span>
              <input
                type="text"
                placeholder="e.g. Menlo"
                className="input input-bordered input-primary w-full"
                onChange={(e)=>setSuburb(e.target.value)}
               value={suburb}
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">city</span>
            </label>
            <label className="input-group">
              <span>
              <MdLocationOn style={{ fontSize: "1.5rem" }} />
              </span>
              <input
                type="text"
                placeholder="Pretoria"
                className="input input-bordered input-primary w-full"
                onChange={(e)=>setCity(e.target.value)}
              value={city}
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">province</span>
            </label>
            <label className="input-group">
              <span>
                <MdLocationOn style={{ fontSize: "1.5rem" }} />
              </span>
              <input
                type="text"
                placeholder="e.g Gauteng"
                className="input input-bordered input-primary w-full"
               value={province}
                onChange={(e)=>setProvince(e.target.value)}
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">postal code</span>
            </label>
            <label className="input-group">
              <span>
                <MdLocationOn style={{ fontSize: "1.5rem" }} />
              </span>
              <input
                type="text"
                placeholder="e.g 0152"
                className="input input-bordered input-primary w-full"
              
                onChange={(e)=>setPostalCode(e.target.value)}
              />
            </label>
          </div>
          <div className="flex justify-start mt-9">
            <button className="btn btn-primary" onClick={addCinema}>
              next
            </button>
           
          </div> <span>Already have an account?  <Link className="link"  to={'/login'}>login</Link></span>
        </form>
      </div>
    </div>
  </div>
  
  
  
  :




  <div className="hero min-h-screen flex justify-center align-middle">
  <div className="card w-96 card-compact bg-base-100 shadow-xl">
    <div className="card-body">
      <h1 className="text-center text-5xl font-bold">Register</h1>
      <form>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <label className="input-group">
            <span>
              <MdEmail style={{ fontSize: "1.5rem" }} />
            </span>
            <input
              type="email"
              placeholder="info@site.com"
              className="input input-bordered input-primary w-full"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <label className="input-group">
            <span>
              <BiRename style={{ fontSize: "1.5rem" }} />
            </span>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className="input input-bordered input-primary w-full"
              onChange={(e)=>setName(e.target.value)}
              value={name}
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">password</span>
          </label>
          <label className="input-group">
            <span>
              <AiFillLock style={{ fontSize: "1.5rem" }} />
            </span>
            <input
              type="password"
              placeholder="*********"
              className="input input-bordered input-primary w-full"
              onChange={(e)=>setPassword(e.target.value)}
            
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Cellphone</span>
          </label>
          <label className="input-group">
            <span>
              <IoCall style={{ fontSize: "1.5rem" }} />
            </span>
            <input
              type="tel"
              placeholder="e.g 0712345678"
              className="input input-bordered input-primary w-full"
              value={cellphone}
              onChange={(e)=>setPhone(e.target.value)}
            />
          </label>
        </div>

        <div className="flex justify-start mt-9">
          <button className="btn btn-primary" onClick={addAdmin}>
            register
          </button>
         
        </div> <span>Already have an account?  <Link className="link"  to={'/login'}>login</Link></span>
      </form>
    </div>
  </div>
</div>}
  </div>
  )
}

export default CinemaForm