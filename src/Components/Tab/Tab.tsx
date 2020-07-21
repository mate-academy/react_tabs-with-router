import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  title: string;
  toUrl: string;
}

export const Tab: FC<Props> = (props) => {
  const { toUrl } = props;

  return (
    <NavLink
      to={`/tabs/${toUrl}`}
      exact
      className="btn btn-outline-primary m-2"
    >
      {props.title}
    </NavLink>
  );
};
