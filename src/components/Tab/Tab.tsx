import React from 'react';
import { Link } from 'react-router-dom';
import { Tab as TabType } from '../../types/Tab';

interface Props {
  tab: TabType;
  onSelect: (value: TabType) => void;
}

export const Tab: React.FC<Props> = ({ tab, onSelect }) => {
  return (
    <li data-cy="tab" className="is-active">
      <Link to={`../${tab.id}`} onClick={() => onSelect(tab)}>{tab.title}</Link>
    </li>
  );
};
