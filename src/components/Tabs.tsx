import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTab?: Tab;
  onSelect?: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onSelect }) => {
  return (
    <>
      <div data-cy="Tabs" className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = selectedTab?.id === tab.id;

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({
                  'is-active': isActive,
                })}
              >
                <Link
                  to={`/tabs/${tab.id}`}
                  onClick={() => onSelect && onSelect(tab)}
                  style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
