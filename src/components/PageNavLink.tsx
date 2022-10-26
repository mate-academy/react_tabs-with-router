import classNames from "classnames";
import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  text: string;
  end?: boolean;
}

export const PageNavLink: React.FC<Props> = ({ to, text, end = false }) => (
  <NavLink
    className={({ isActive }) => classNames(
      "navbar-item", {
        "has-background-grey-lighter": isActive,
      })
    }
    to={to}
    end={end}
  >
    {text}
  </NavLink>
);
