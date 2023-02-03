import React from 'react';
import classnames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[]
};

export const TabPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classnames({ 'is-active': tab.id === tabId })}
            >
              <Link
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? (selectedTab.content)
          : ('Please select a tab')}
      </div>
    </>
  );
};
