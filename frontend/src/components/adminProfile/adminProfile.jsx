import dark_magician_girl from "../../assets/dark_magician_girl.jpeg"

function AdminProfile() {
    return (

        <>
            <h1 class="text-primary text-4xl m-4 text-center">Edit Profile</h1>
            <hr className="w-4/5 m-4" />

            <div className="container flex flex-col min-w-screen min-h-full lg:flex-row m-4">

                <div className="card lg:card-side w-full bg-base-300 shadow-xl">
                   
                    <div className="card-body">
                        <img src={dark_magician_girl} className="w-64 rounded-full ring ring-primary ring-offset-base-100 mx-auto"/>
                        <h2 className="text-center">Upload a different photo...</h2>
                        
                        <div className="card-actions justify-center">
                            <input type="file" className="file-input file-input-bordered file-input-primary w-4/5 max-w-xs rounded" />
                        </div>
                    </div>
                    
                </div>

               
                <div className="divider lg:divider-horizontal"></div>

                <div className="p-6 grid flex-grow  card h-3/4 w-full rounded-box place-items-cente bg-base-300" >
                    <h1 class="text-primary text-4xl text-center">Personal info</h1>
                    
                    <hr className="divider lg:divider-horizontal" />
                    <div className="card flex-shrink-0 w-full md:w-full max-w-screen">
                        <div className="card-body w-full">
                            <div className="form-control flex flex-row w-full">
                                <label className="label">
                                    <span className="label-text w-24">First name:</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered w-full rounded" />
                            </div>
                            <div className="form-control flex flex-row">
                                <label className="label">
                                    <span className="label-text w-24">Last name:</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered w-full rounded" />

                            </div>
                            <div className="form-control flex flex-row">
                                <label className="label">
                                    <span className="label-text w-24">Email</span>
                                </label>
                                <input type="email" placeholder="password" className="input input-bordered w-full rounded" />

                            </div>
                            <div className="form-control flex flex-row">
                                <label className="label">
                                    <span className="label-text w-24">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered w-full rounded" />

                            </div>
                            <div className="form-control flex flex-row">
                                <label className="label">
                                    <span className="label-text w-24">Phone no:</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered w-full rounded" />
                            </div>

                            <div className=" flex flex-row justify-end align-end gap-2">
                                <button className="btn btn-primary w-24 rounded">Save</button>
                                <button className="btn btn-secondary w-24 rounded">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>


    );
}

export default AdminProfile;