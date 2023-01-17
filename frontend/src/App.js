import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import "./App.css";
import Dashboard from "./components/dash/dash";
import { getToken } from "./components/environment/helpers";
import Spin from "./components/Spinner/Spin";
import AllMovies from "./components/AllMovies/AllMovies";

const Login = lazy(() => import("./components/login/login"));
const Home = lazy(() => import("./components/home/home"));
const ForgotPassword = lazy(() =>
  import("./components/passwords/forgot_password/ForgotPassword")
);
const ResetPassword = lazy(() =>
  import("./components/passwords/reset_password/ResetPassword")
);
const Statistics = lazy(() => import("./components/statistics/statistics"));
const AdminProfile = lazy(() =>
  import("./components/adminProfile/adminProfile")
);
const ClientSide = lazy(() => import("./components/clientSide/ClientSide"));
const Splash = lazy(() => import("./components/splashpage/Splash"));
const Register = lazy(() => import("./components/register/Register"));
const Customer = lazy(() => import("./components/Customer/Customer"));
const Cinema = lazy(() => import("./components/Cinema/Cinema"));
const Theatre = lazy(() => import("./components/Theatre/Theatre"));
const Booking = lazy(() => import("./components/Booking/Booking"));



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
           

            <Route path="book" element={<Booking />}></Route>
            <Route path="login" element={<Login />}></Route>
 <Route path="customer" element={<Customer />}></Route>

           
            <Route path="client" element={<ClientSide />}>

            </Route>
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
            <Route path="/admin" element={!getToken() ? <Home /> : <Navigate to="admin/login" />}>
              <Route path="/admin" element={<Navigate replace to="dashboard" />}/>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<AdminProfile />} />
              <Route path="movies" element={<AllMovies/>} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
