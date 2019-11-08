import { Link } from 'react-router-dom';
import React from 'react';

const HomePage = () => (
  <div className="homepage">
    <h2>WelcomeYou are at Homepage , click to go to tabs</h2>
    <Link to="/tabs" className="positive ui button">GO TO TABS</Link>
  </div>
);

export default HomePage;
