import classNames from "classnames";
import { NavLink, To } from "react-router-dom";

type Props = {
  to: To;
  title: string;
};

export const CustomLink: React.FC<Props> = ({ to, title }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (classNames('navbar-item', {
        'is-active': isActive,
      }))}
    >
      {title}
    </NavLink>
  );
};
