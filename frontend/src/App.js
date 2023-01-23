import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import "./App.css";
import Dashboard from "./components/dash/dash";
import { getToken } from "./components/environment/helpers";
import Spin from "./components/Spinner/Spin";


const Login = lazy(() => import("./components/login/login"));
const Home = lazy(()=> import('./components/home/home'));
const ForgotPassword = lazy(()=> import('./components/passwords/forgot_password/ForgotPassword'));
const ResetPassword  = lazy(()=> import('./components/passwords/reset_password/ResetPassword'));
const Statistics = lazy(() => import("./components/statistics/statistics"));
const AdminProfile = lazy(()=> import('./components/adminProfile/adminProfile'));
// const Statistics = lazy(()=> import('./components/statistics/statistics'));
const Splash = lazy(()=> import('./components/splashpage/Splash'))
const Register = lazy(()=> import('./components/register/Register') )
const Customer = lazy(()=> import('./components/tester/Customers'))
const Reviews = lazy(() => import("./components/customers/reviews/reviews"))
const Landing = lazy(()=> import('./components/customers/landing/landing'))
const History = lazy(()=> import('./components/customers/bookingHistory/history'))
const Review = lazy(()=> import('./components/customers/review/review'))
const Test = lazy(() => import("./components/test/test"))
const StarRatings = lazy(() => import("./components/customers/star_ratings/star_ratings"))
const Filter = lazy(() => import("./components/customers/filterObjects/filter"))

function App() {
  return (
    <div className="App">
     
      <Router>
        <Suspense fallback={<div><Spin/></div>}>
          <Routes>
       
            <Route path="login" element={<Login/>}></Route>
            <Route path="customer" element={<Customer/>}></Route>
            <Route path='forgot' element={<ForgotPassword/>}></Route>
            <Route path="/" element={<Splash/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="*" element={<Splash/>}></Route>
            {/* <Route path="/admin" element={!getToken() ? <Home /> : <Navigate to="login"/>} > */}
            <Route path="forgot" element={<ForgotPassword/>}></Route>
            <Route path="reset" element={<ResetPassword/>}></Route>
            <Route path="/admin" element={!getToken() ? <Home /> : <Navigate to="admin/login"/>} >
              <Route path="/admin" element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<AdminProfile />} />
              <Route path="stats" element={<Statistics />} />
            </Route>

            <Route path="/landing" element={<Landing/>}></Route>
            <Route path="/history" element={<History/>}></Route>
            <Route path="/review" element={<Review/>}></Route>
            <Route path="/test" element={<Test/>}></Route>
            <Route path="/reviews" element={<Reviews/>}></Route>
            <Route path="/stars" element={<StarRatings/>}></Route>
            <Route path="/filter" element={<Filter/>}></Route>

          </Routes>
       
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
