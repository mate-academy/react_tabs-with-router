import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.scss";
import { Link, Outlet, useLocation } from "react-router-dom";
import classNames from "classnames";

export const App = () => {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={classNames("navbar-item", {
                "is-active": isActive("/"),
              })}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={classNames("navbar-item", {
                "is-active": pathname.startsWith("/tabs"),
              })}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <Outlet />
      </div>
    </>
  );
};
