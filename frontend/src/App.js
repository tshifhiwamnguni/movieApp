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

const Login = lazy(() => import("./components/login/login"));
const Home = lazy(()=> import('./components/home/home'));
const ForgotPassword = lazy(()=> import('./components/passwords/forgot_password/ForgotPassword'));
const ResetPassword  = lazy(()=> import('./components/passwords/reset_password/ResetPassword'));

const AdminProfile = lazy(()=> import('./components/adminProfile/adminProfile'));
const Statistics = lazy(()=> import('./components/statistics/statistics'));

const Splash = lazy(()=> import('./components/splashpage/Splash'))


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
         
            <Route path='/admin/stats/' element={<Statistics/>}></Route>

          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
