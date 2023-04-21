import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab;
};

export const TabsLink: React.FC<Props> = ({ tab }) => {
  const { id, title } = tab;

  return (
    <Link to={`/tabs/${id}`}>
      {title}
    </Link>
  );
};
