import React from 'react';
import { Link } from 'react-router-dom';

interface Tab {
  id: string;
  title: string;
  content: string;
}

type Props = {
  tabs: Tab[]
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  return (
    <ul className="list">
      {tabs.map(tab => (
        <li
          key={tab.id}
          className="list__item"
        >
          <Link
            to={tab.id}
            className="btn"
          >
            {tab.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
