import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { BiRename } from "react-icons/bi";

function AdminProfile() {
  return (
    <div className="hero min-h-screen flex justify-center align-middle">
      <div className="card w-96 card-compact bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-center text-5xl font-bold">Profile</h1>
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <label className="input-group">
                <span>
                  <MdEmail style={{ fontSize: "1.5rem" }} />
                </span>
                <input
                  type="email"
                  placeholder="info@site.com"
                  className="input input-bordered input-primary w-full"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <label className="input-group">
                <span>
                  <BiRename style={{ fontSize: "1.5rem" }} />
                </span>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  className="input input-bordered input-primary w-full"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Cellphone</span>
              </label>
              <label className="input-group">
                <span>
                  <IoCall style={{ fontSize: "1.5rem" }} />
                </span>
                <input
                  type="tel"
                  placeholder="e.g 0712345678"
                  className="input input-bordered input-primary w-full"
                />
              </label>
            </div>

            <div className="flex justify-end mt-9">
              <button className="btn btn-primary">
                  Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
