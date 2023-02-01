import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import "./App.css";
import { getToken } from "./components/environment/helpers";
import Spin from "./components/Spinner/Spin";

const Snacks = lazy(() => import("./components/Cinema/Snacks/Snacks"));
const TheatreBooking = lazy(() =>
  import("./components/Admin/theatreBooking/TheatreBooking")
);
const CinemaBooking = lazy(() =>
  import("./components/Admin/cinemaBooking/CinemaBooking")
);
const Dashboard = lazy(() => import("./components/Admin/dash/dash"));
const Login = lazy(() => import("./components/auth/login/login"));
const Home = lazy(() => import("./components/Admin/Navbar/navbar"));
const ForgotPassword = lazy(() =>
  import("./components/auth/passwords/forgot_password/ForgotPassword")
);
const ResetPassword = lazy(() =>
  import("./components/auth/passwords/reset_password/ResetPassword")
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
const Plays = lazy(() => import("./components/clientSide/plays/Plays"));

// client side lazyLoads
const CinemaList = lazy(() =>
  import("./components/clientSide/cinemaList/CinemaList")
);
const TheatreList = lazy(() =>
  import("./components/clientSide/theatreList/TheareList")
);

const Splash = lazy(() => import("./components/splashpage/Splash"));
const Register = lazy(() => import("./components/auth/register/Register"));
// const Customer = lazy(() => import("./components/Customer/Customer"));
const CinemaDashboard = lazy(() =>
  import("./components/Cinema/cinemaDashboard/CinemaDashboard")
);
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
const CinMovies = lazy(() => import("./components/Cinema/Movies/movies"));

// const Search = lazy(()=>import('./components/customers/searchFilter/search'));
const TheatreNavbar = lazy(() =>
  import("./components/Theatre/TheatreNavbar/TheatreNavbar")
);
const Shows = lazy(() => import("./components/Theatre/Shows/Shows"));
const Snack = lazy(() => import("./components/Theatre/Snacks/Snacks"));
const TheatreReview = lazy(() =>
  import("./components/Theatre/Reviews/Reviews")
);
const BookingStatTheatre = lazy(() =>
  import("./components/Theatre/TheatreBooking/TheatreBooking")
);

const Landing = lazy(() => import("./components/Admin/dash/dash"));
const History = lazy(() =>
  import("./components/customers/bookingHistory/history")
);
const Review = lazy(() => import("./components/customers/review/review"));
const Test = lazy(() => import("./components/test/test"));
const Reviews = lazy(() => import("./components/customers/reviews/reviews"));
const StarRatings = lazy(() =>
  import("./components/customers/star_ratings/star_ratings")
);
const Filter = lazy(() =>
  import("./components/customers/filterObjects/filter")
);
const Example = lazy(() => import("./components/customers/addExtras/snacks"));
const ReviewView = lazy(() => import("./components/Cinema/Reviews/Review"));
const BookingStat = lazy(() =>
  import("./components/Cinema/cinemaBooking/BookingStat")
);

const Payment = lazy(() => import("./components/clientSide/payment/Payment"));
const PreReg = lazy(() =>
  import("./components/auth/preRegistration/RegistrationSelector")
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
            <Route path="login" element={<Login />}></Route>

            <Route path="/client" element={<ClientSide />}>
              <Route path="clientHome" element={<ClientHome />} />
              <Route path="movieList" element={<Movies />} />
              <Route path="plays" element={<Plays />} />
              <Route path="cinemaList" element={<CinemaList />} />
              <Route path="theatreList" element={<TheatreList />} />
              <Route path="book" element={<Booking />}></Route>
              <Route path="payment" element={<Payment />} />
              <Route path="snackss" element={<Example />}></Route>
            </Route>

            {/* Public routes */}
            <Route path="login" element={<Login />}></Route>
            {/* <Route path="customer" element={<Customer />}></Route> */}

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
              element={
                !getToken() ? <CinemaNavbar /> : <Navigate to={"/login"} />
              }
            >
              <Route path="cinema" element={<Navigate replace to="/dash/" />} />
              <Route path="dash" element={<CinemaDashboard />} />
              <Route path="mov" element={<CinMovies />} />
              <Route path="snacks" element={<Snacks />} />
              <Route path="stats" element={<BookingStat />} />
              <Route path="review/:movieId" element={<ReviewView />} />
            </Route>

            {/* Admin for theatre path/routes */}
            <Route
              path="theatre"
              element={
                !getToken() ? <TheatreNavbar /> : <Navigate to={"/login"} />
              }
            >
              <Route path="theatre" element={<Navigate replace to="dash" />} />
              <Route path="dash" element={<Theatre />} />
              <Route path="shows" element={<Shows />} />
              <Route path="snacks" element={<Snack />} />
              <Route path="stats" element={<BookingStatTheatre />} />
              <Route path="review/:showId" element={<TheatreReview />} />
            </Route>

            <Route path="/landing" element={<Landing />}></Route>
            <Route path="/history" element={<History />}></Route>
            <Route path="/review" element={<Review />}></Route>
            <Route path="/test" element={<Test />}></Route>
            <Route path="/reviews" element={<Reviews />}></Route>
            <Route path="/stars" element={<StarRatings />}></Route>
            <Route path="/filter" element={<Filter />}></Route>
          
            {/* <Route path="/search" element={<Search/>}></Route> */}
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
