import cn from 'classnames';
import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: React.FC = () => {
  const { tabId } = useParams();
  const getTabContent = tabs.find(tab => tab.id === tabId)?.content;

  const getLinkClass = (id: string) =>
    cn('navbar-item', { 'is-active': tabId === id });

  if (tabId && !getTabContent) {
    return <Navigate to={'..'} />;
  }

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li data-cy="Tab" key={tab.id} className={getLinkClass(tab.id)}>
              <Link to={`../${tab.id}`} replace>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {getTabContent || 'Please select a tab'}
      </div>
    </>
  );
};
