import { lazy } from "react";
import "./App.css";

const Login = lazy(() => import("./components/login/login"));
function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
