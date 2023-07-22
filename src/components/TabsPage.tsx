import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabsPage: FC<Props> = ({ tabs }) => {
  const { tabId = '0' } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={
                classNames({ 'is-active': tabId === tab.id })
              }
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
