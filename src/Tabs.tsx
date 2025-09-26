import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from './types/Tab';

interface Props {
  tabs?: Tab[]; // opcional
  selectedId?: string;
}

const Tabs: React.FC<Props> = ({ tabs = [], selectedId }) => {
  if (!Array.isArray(tabs) || tabs.length === 0) {
    return null; // ou <nav ...><ul/></nav> se preferir renderizar estrutura vazia
  }

  return (
    <nav className="tabs is-boxed" aria-label="Primary">
      <ul>
        {tabs.map(tab => {
          const active = tab.id === selectedId;

          return (
            <li
              key={tab.id}
              data-cy="Tab"
              className={active ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Tabs;
