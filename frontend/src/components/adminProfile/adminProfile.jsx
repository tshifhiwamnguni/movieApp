import dark_magician_girl from "../../assets/dark_magician_girl.jpeg"
import { useState } from 'react';
// import userService from "../../services/users.crudService";
import axios from "axios"
// import { info } from "daisyui/src/colors";

function AdminProfile() {

    const [firstName, setFirstName] = useState('');
    // const [lastName, setSurname] = useState('')
    const [emails, setEmails] = useState('');
    const [cellPhone, setCellphone] = useState('');
    const [passWord, setPassword] = useState('');
    let info = ''
    //API request
   
    // useEffect and jwt
   

    const handleSubmit = event => {
        console.log('handleSubmit ran');
        // 👈️ prevent page refresh
        event.preventDefault(); 

        axios.get("https://strapi-movie-app.onrender.com/api/users").then((response) => {
           console.log(response.data)
            info = response.data[0].username
        }).catch((err) => console.log(err));

        
        

        

        
        

        //Post request
        // event.preventDefault(); 
        axios.put(`https://strapi-movie-app.onrender.com/api/users/9`, {data:{
            
                username: firstName,
                email: emails,
                cellphone: cellPhone}
       
        }).then((response) => {
            console.log("Details saved!")
            console.log(response)
            
        }).catch((err) => console.log(err));

        // 👇️ access input values here
        console.log('firstName 👉️', firstName);
        console.log('email 👉️', emails);
        console.log('cellPhone 👉️', cellPhone);
        console.log('passWord 👉️', passWord);

        setFirstName('');
        setEmails('');
        setCellphone('');
        setPassword('');
    };

    return (

        <>
            <h1 className="text-primary text-4xl m-4 text-center">Edit Profile</h1>
            <hr className="w-4/5 m-4" />

            <div className="container flex flex-col min-w-screen min-h-full lg:flex-row m-4">

                <div className="card lg:card-side w-full bg-base-300 shadow-xl">

                    <div className="card-body">
                        <img src={dark_magician_girl} className="w-64 rounded-full ring ring-primary ring-offset-base-100 mx-auto" alt="dark magician" />
                        <h2 className="text-center">Upload a different photo...</h2>

                        <div className="card-actions justify-center">
                            <input type="file" className="file-input file-input-bordered file-input-primary w-4/5 max-w-xs rounded" />
                        </div>
                    </div>

                </div>


                <div className="divider lg:divider-horizontal"></div>

                <div className="p-6 grid flex-grow  card h-3/4 w-full rounded-box place-items-cente bg-base-300" >
                    <h1 className="text-primary text-4xl text-center">Personal info</h1>

                    <hr className="w-4/5 m-4" />
                    <form className="card flex-shrink-0 w-full md:w-full max-w-screen" onSubmit={handleSubmit}>
                        <div className="card-body w-full">
                            <div className="form-control flex flex-row w-full">
                                <label className="label">
                                    <span className="label-text w-24">First name:</span>
                                </label>
                                <input type="text" id="username" name="username" value={firstName} onChange={event => setFirstName(event.target.value)} placeholder={info} className="input input-bordered w-full rounded"/>
                            </div>
                            <div className="form-control flex flex-row">
                                <label className="label">
                                    <span className="label-text w-24">Last name:</span>
                                </label>
                                <input type="text" placeholder="Surname" id="surname" name="surname" className="input input-bordered w-full rounded" />

                            </div>
                            <div className="form-control flex flex-row">
                                <label className="label">
                                    <span className="label-text w-24">Email</span>
                                </label>
                                <input type="email" id="email" name="email" value={emails} placeholder="password" onChange={event => setEmails(event.target.value)} className="input input-bordered w-full rounded" />

                            </div>
                            <div className="form-control flex flex-row">
                                <label className="label">
                                    <span className="label-text w-24">Password</span>
                                </label>
                                <input type="text" id="email" name="email" value={passWord} placeholder="Password" onChange={event => setPassword(event.target.value)} className="input input-bordered w-full rounded" />

                            </div>
                            <div className="form-control flex flex-row">
                                <label className="label">
                                    <span className="label-text w-24">Phone no:</span>
                                </label>
                                <input type="text" id="cellphone" name="cellphone" value={cellPhone} placeholder="Phone number" onChange={event => setCellphone(event.target.value)} className="input input-bordered w-full rounded" />
                            </div>

                            <div className=" flex flex-row justify-end align-end gap-2">
                                <button className="btn btn-primary w-24 rounded" type="submit">Save</button>
                                <button className="btn btn-secondary w-24 rounded">Cancel</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </>


    );
}


export default AdminProfile