import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { lazy, Suspense } from 'react';
import "./App.css";

const Login = lazy(() => import("./components/login/login"));
const Home = lazy(()=> import('./components/home/home'));
const AdminProfile = lazy(()=> import('./components/adminProfile/adminProfile'));
const Statistics = lazy(()=> import('./components/statistics/statistics'));
const Test = lazy(()=> import('./components/test/test'));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='admin' element={<AdminProfile/>}></Route>
            <Route path='log' element={<Login/>}></Route>
            <Route path='stats' element={<Statistics/>}></Route>
            <Route path='test' element={<Test/>}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
