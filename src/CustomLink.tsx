import classNames from 'classnames';
import { FC } from 'react';
import { NavLink, To } from 'react-router-dom';

interface Props {
  to: To;
  title: string;
}

export const CustomLink: FC<Props> = (props) => {
  const { to, title } = props;

  return (
    <NavLink
      to={to}
      className={
        (args) => classNames(
          { 'is-active': args.isActive },
        )
      }
    >
      {title}
    </NavLink>
  );
};
