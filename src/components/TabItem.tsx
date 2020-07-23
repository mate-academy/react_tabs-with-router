import React from 'react';
import {
  Link,
} from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from './Tab';

interface Props {
  tab: Tab;
  selected?: Tab;
}

export const TabItem: React.FC<Props> = ({ tab, selected }) => (
  <Link
    to={`/tabs/${tab.id}`}
    className={classNames('tab', { selected: (selected ? selected.id === tab.id : false) })}
  >
    {tab.title}
  </Link>
);
