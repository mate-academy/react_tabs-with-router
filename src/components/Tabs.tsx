import { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId?: string,
};

export const Tabs: FC<Props> = ({ tabs, selectedTabId }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || null;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames(
                { 'is-active': tab.id === selectedTab?.id },
              )}
              data-cy="Tab"
            >
              <Link
                to={`../${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </div>
  );
};
