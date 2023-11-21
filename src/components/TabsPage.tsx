import classNames from 'classnames';
import React from 'react';
import { useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const selectTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(tab => (
              <li
                data-cy="Tab"
                className={classNames(
                  { 'is-active': tabId === tab.id },
                )}
              >
                <a href={`#/tabs/${tab.id}`}>{tab.title}</a>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectTab ? selectTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
