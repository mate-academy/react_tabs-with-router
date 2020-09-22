import React from 'react';
import home from '../../images/Home.jpg';
import './Home.scss';

export const Home = () => (
  <div className="Home__container">
    <img className="Home__image" src={home} alt="" />
  </div>
);
