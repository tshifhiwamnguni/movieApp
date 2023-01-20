import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import "./App.css";
import Dashboard from "./components/Admin/dash/dash";
import { getToken } from "./components/environment/helpers";
import Spin from "./components/Spinner/Spin";
import CinemaBooking from "./components/Admin/cinemaBooking/CinemaBooking";
import TheatreBooking from "./components/Admin/theatreBooking/TheatreBooking";

const Login = lazy(() => import("./components/login/login"));
const Home = lazy(() => import("./components/Admin/Navbar/navbar"));
const ForgotPassword = lazy(() =>
  import("./components/passwords/forgot_password/ForgotPassword")
);
const ResetPassword = lazy(() =>
  import("./components/passwords/reset_password/ResetPassword")
);
const Booking = lazy(() => import("./components/Booking/Booking"));
const AdminProfile = lazy(() =>
  import("./components/Admin/adminProfile/adminProfile")
);
const ClientSide = lazy(() => import("./components/clientSide/ClientSide"));

const ClientHome = lazy(() =>
  import("./components/clientSide/ClientHome/clientHome")
);
const Movies = lazy(() => import("./components/clientSide/movies/Movies"));

// client side lazyLoads
const CinemaList = lazy(() =>
  import("./components/clientSide/cinemaList/CinemaList")
);
const TheatreList = lazy(() =>
  import("./components/clientSide/theatreList/TheareList")
);

const Splash = lazy(() => import("./components/splashpage/Splash"));
const Register = lazy(() => import("./components/register/Register"));
const Customer = lazy(() => import("./components/Customer/Customer"));
const Cinema = lazy(() => import("./components/Cinema/cinemaDashboard/Cinema"));
const Theatre = lazy(() =>
  import("./components/Theatre/TheatreDashboard/Theatre")
);
const AllMovies = lazy(() =>
  import("./components/Admin/CinemaMovies/Allmovies")
);
const Users = lazy(() => import("./components/Admin/users/users"));
const CinemaNavbar = lazy(() =>
  import("./components/Cinema/CinemaNavbar/CinemaNavbar")
);

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense
          fallback={
            <div>
              <Spin />
            </div>
          }
        >
          <Routes>
            {/* client related routes */}

            <Route path="login" element={<Login />}></Route>

            <Route path="/client" element={<ClientSide />}>
              {/* <Route path="/client" element={<Navigate replace to='clientHome' />} /> */}
              <Route path="clientHome" element={<ClientHome />} />
              <Route path="movieList" element={<Movies />} />
              <Route path="cinemaList" element={<CinemaList />} />
              <Route path="theatreList" element={<TheatreList />} />
              <Route path="book" element={<Booking />}></Route>
            </Route>

            {/* ========================================================================================================= */}

            <Route path="customer" element={<Customer />}></Route>
            <Route path="/cinema" element={<Cinema />}></Route>
            <Route path="/theatre" element={<Theatre />}></Route>

            <Route path="/register" element={<Register />}></Route>

            <Route path="forgot" element={<ForgotPassword />}></Route>
            <Route path="/" element={<Splash />}></Route>
            <Route path="/register" element={<Register />}></Route>

            <Route path="*" element={<Splash />}></Route>
            {/* <Route path="/admin" element={!getToken() ? <Home /> : <Navigate to="login"/>} > */}
            <Route path="forgot" element={<ForgotPassword />}></Route>
            <Route path="reset" element={<ResetPassword />}></Route>

            {/* Public routes */}
            <Route path="login" element={<Login />}></Route>
            <Route path="customer" element={<Customer />}></Route>

            <Route path="/register" element={<Register />}></Route>
       
 

            <Route path="forgot" element={<ForgotPassword />}></Route>
            <Route path="/" element={<Splash />}></Route>
            <Route path="/register" element={<Register />}></Route>

            <Route path="*" element={<Splash />}></Route>

            <Route path="forgot" element={<ForgotPassword />}></Route>
            <Route path="reset" element={<ResetPassword />}></Route>
            {/* Admin routes */}
            <Route
              path="/admin"
              element={!getToken() ? <Home /> : <Navigate to="/login" />}
            >
              <Route
                path="/admin"
                element={<Navigate replace to="dashboard" />}
              />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<AdminProfile />} />
              <Route path="movies" element={<AllMovies />} />
              <Route path="users" element={<Users />} />
              <Route path="cinemabooking" element={<CinemaBooking />} />
              <Route path="theatrebooking" element={<TheatreBooking />} />
            </Route>

            {/* Admin for cinema path/routes */}
            <Route
              path="/cinema"
              element={!getToken() ? <Cinema /> : <Navigate to="/login" />}
            >
              <Route
                path="cinema"
                element={<Navigate replace to="/navbar" />}
              />
              <Route path="navbar" element={<CinemaNavbar />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
