import React from 'react';
import { Link, useParams } from 'react-router-dom';

type Props = {
  title: string;
  id: string;
};

export const Tab: React.FC<Props> = ({ title, id }) => {
  const { tabId } = useParams();
  const acitveTab = id === tabId
  return (
    <li data-cy="Tab" className={acitveTab ? "is-active" : ''}>
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
