import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.scss";
import { Outlet } from "react-router-dom";
import NavBar from "./component/NavBar";

export const App = () => (
  <>
    <NavBar />
    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
