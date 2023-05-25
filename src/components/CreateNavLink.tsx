import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

interface Props {
  content: string;
  reference: string;
}

export const CreateNavLink: React.FC<Props> = ({ content, reference }) => (
  <NavLink
    to={reference}
    className={({ isActive }) => (classNames('navbar-item', {
      'is-active': isActive,
    }))}
  >
    {content}
  </NavLink>
);
