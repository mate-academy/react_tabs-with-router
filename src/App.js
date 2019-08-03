import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      {/* eslint-disable-next-line */}
      <Router>
        <div>
          <nav>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/tabs">Tabs</NavLink>
              </li>
            </ul>
          </nav>

          <Route path="/" render={() => (<h2>Home</h2>)} />
          <Route path="/tabs" component={Tabs} />

        </div>
      </Router>
    </div>
  );
}

export default App;
