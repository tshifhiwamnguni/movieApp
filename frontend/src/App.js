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
const Home = lazy(() => import("./components/home/home"));
const Splash = lazy(() => import("./components/splashpage/Splash"));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path="/" element={<Splash />}></Route>
            <Route path="/admin/login/" element={<Login />}></Route>
            <Route path="/admin/" element={<Home />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
