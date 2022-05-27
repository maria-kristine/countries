import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
