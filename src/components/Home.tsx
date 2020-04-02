import React, { FC } from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{ path: string; x: string }> {
  x: string;
}


export const Home: FC<Props> = ({ match }) => (
  <header className="jumbotron">
    <h1 className="title ">{match.params.x ? match.params.x : 'Home Page'}</h1>
    <hr />
    <ul className="nav">
      <li className="main-nav-item">
        <NavLink
          className="nav-link btn-block"
          activeClassName="btn btn-secondary"
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li className="main-nav-item">
        <NavLink
          className="nav-link btn-block"
          activeClassName="btn btn-secondary"
          to="/tabs"
        >
          Tabs
        </NavLink>
      </li>
    </ul>
  </header>
);
