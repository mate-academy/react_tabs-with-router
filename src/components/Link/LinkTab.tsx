import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  id: string;
};

export const LinkTab: React.FC<Props> = ({ title, id }) => (
  <Link data-cy="TabLink" to={`/tabs/${id}`}>
    {title}
  </Link>
);
