import React from 'react';
import Home from '../../image/Home.gif';
import './HomePage.scss';

export const HomePage: React.FC = () => (
  <div className="home">
    <h1 className="home__title">Home Page</h1>
    <img
      src={Home}
      alt="Home"
      className="home__image"
    />
  </div>
);
