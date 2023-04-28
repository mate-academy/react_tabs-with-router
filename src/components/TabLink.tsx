import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab,
};

export const TabLink: React.FC<Props> = ({ tab }) => (
  <Link
    to={`/tabs/${tab.id}`}
  >
    {tab.title}
  </Link>
);
