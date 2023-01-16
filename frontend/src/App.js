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
<<<<<<< HEAD
const Register = lazy(()=> import('./components/register/Register') )
const Customer = lazy(()=> import('./components/tester/Customers'))
// const Splash = lazy(() => import("./components/splashpage/Splash"));
=======
>>>>>>> cdc04cb2fd993ecb4459593f0c42604ae6a017fa

function App() {
  return (
    <div className="App">
     
      <Router>
        <Suspense fallback={<div><Spin/></div>}>
          <Routes>
            {/* <Route path='/' element={<Splash/>}></Route>
            <Route path='log' element={<Login/>}></Route>
            <Route path='forgot' element={<ForgotPassword/>}></Route>
            <Route path='reset' element={<ResetPassword/>}></Route>
            <Route path='dashboard' element={<Home/>}></Route>
            <Route path="/" element={<Splash />}></Route>
            <Route path="/admin/login/" element={<Login />}></Route>
            <Route path="/admin/" element={<Home />}></Route>
            <Route path='/admin/profile/' element={<AdminProfile/>}></Route> */}
         
    
            <Route path="login" element={<Login/>}></Route>
            <Route path="customer" element={<Customer/>}></Route>
            <Route path='forgot' element={<ForgotPassword/>}></Route>
            <Route path="/" element={<Splash/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="*" element={<Splash/>}></Route>
<<<<<<< HEAD
            <Route path="/admin" element={!getToken() ? <Home /> : <Navigate to="login"/>} >
=======
            <Route path="forgot" element={<ForgotPassword/>}></Route>
            <Route path="reset" element={<ResetPassword/>}></Route>
            <Route path="/admin" element={!getToken() ? <Home /> : <Navigate to="admin/login"/>} >
>>>>>>> cdc04cb2fd993ecb4459593f0c42604ae6a017fa
              <Route path="/admin" element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<AdminProfile />} />
              <Route path="stats" element={<Statistics />} />
            </Route>
          </Routes>
       
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
