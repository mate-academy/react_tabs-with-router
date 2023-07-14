import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[]
  selectedTab: Tab | null
  handleSelected: (tab: Tab) => void
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  handleSelected,
}) => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': selectedTab?.id === tab.id,
              })}
            >
              <Link
                to={`/tabs/${tab.id}`}
                onClick={() => handleSelected(tab)}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        { selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
