import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  to: string,
  text: string,
  isActive: boolean
};

export const TabNavlink: FC<Props> = ({ to, text, isActive }) => (
  <Link
    to={to}
    className={(
      classNames({ 'is-active': isActive })
    )}
  >
    {text}
  </Link>
);
