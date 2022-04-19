import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="panel">
      <h3 className="panel-tabs">
        <NavLink to="/" className="home">
          Home
        </NavLink>
        <NavLink to="/tabs" className="tabsButton">
          All Tabs
        </NavLink>
      </h3>
    </nav>
  );
};
