import React from 'react';
import { Link, useParams } from 'react-router-dom';

type Props = {
  id: string;
  title: string;
};

export const Tab: React.FC<Props> = ({ id, title }) => {
  const { tabId } = useParams();

  return (
    <li data-cy="Tab" className={id === tabId ? 'is-active' : ''}>
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
