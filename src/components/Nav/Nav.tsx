import { NavButton } from '../NavButton';

export const Nav = () => (
  <div className="navbar">
    <div className="navbar-brand">
      <NavButton
        usePath="/"
        useName="Home"
      />

      <NavButton
        usePath="/tabs"
        useName="Tabs"
      />
    </div>
  </div>
);
