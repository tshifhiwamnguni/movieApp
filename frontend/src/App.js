import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import "./App.css";
import Dashboard from "./components/dash/dash";
import Login from "./components/login/login"
import Home from "./components/home/home";
import { getToken } from "./components/environment/helpers";

const Login = lazy(() => import("./components/login/login"));
const Home = lazy(()=> import('./components/home/home'));
const ForgotPassword = lazy(()=> import('./components/passwords/forgot_password/ForgotPassword'));
const ResetPassword  = lazy(()=> import('./components/passwords/reset_password/ResetPassword'));

const AdminProfile = lazy(() =>
  import("./components/adminProfile/adminProfile")
);
const Statistics = lazy(() => import("./components/statistics/statistics"));

const Splash = lazy(() => import("./components/splashpage/Splash"));

function App() {
  return (
    <div className="App">
     
      <Router>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path='/' element={<Splash/>}></Route>
            <Route path='log' element={<Login/>}></Route>
            <Route path='forgot' element={<ForgotPassword/>}></Route>
            <Route path='reset' element={<ResetPassword/>}></Route>
            <Route path='dashboard' element={<Home/>}></Route>
            <Route path="/" element={<Splash />}></Route>
            <Route path="/admin/login/" element={<Login />}></Route>
            <Route path="/admin/" element={<Home />}></Route>

           
            <Route path='/admin/profile/' element={<AdminProfile/>}></Route>
         
          <Routes>
            <Route path="admin/login" element={<Login/>}></Route>
            <Route path="/" element={<Splash/>}></Route>
            <Route path="*" element={<Splash/>}></Route>
            <Route path="/admin" element={!getToken() ? <Home /> : <Navigate to="admin/login"/>} >
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
