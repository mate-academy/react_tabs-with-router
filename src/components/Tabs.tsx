import { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface TabsProps {
  tabs: Tab[],
  selectedTabId: string,
}

export const Tabs: FC<TabsProps> = ({ tabs, selectedTabId }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          const isSelected = selectedTabId.includes(tab.id);

          return (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': isSelected })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
