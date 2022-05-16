import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export const Navigation = () => {
  return (
    <div className="nav">
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/tabs">
        Tabs
      </NavLink>
    </div>
  );
};

export default Navigation;
