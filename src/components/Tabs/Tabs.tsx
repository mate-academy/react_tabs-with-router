import React from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: React.FC = () => {
  const { tabId: selectedId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === selectedId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                data-cy="Tab"
                className={classNames({ 'is-active': id === selectedId })}
                key={id}
              >
                <Link to={`/tabs/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
