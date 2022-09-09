import Home from "./components/Home";

import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
