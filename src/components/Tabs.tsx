import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useTabs } from '../providers/TabsProvider';

export const Tabs: FC = () => {
  const { tabs, activeTab } = useTabs();

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': activeTab?.id === tab.id })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
