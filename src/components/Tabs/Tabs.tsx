import React from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs:React.FC = () => {
  const { tabId = '' } = useParams();
  const contentTab = tabs.find(tab => tab.id === tabId)?.content
    || 'Please select a tab';

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={classNames({ 'is-active': tabId === tab.id })}
                data-cy="Tab"
                key={tab.id}
              >
                <Link to={`../${tab.id}`}>
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {contentTab}
      </div>
    </div>
  );
};
