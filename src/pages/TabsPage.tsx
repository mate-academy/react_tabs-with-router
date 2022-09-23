import classNames from 'classnames';
import React from 'react';
import { Link, Params, useParams } from 'react-router-dom';

interface Tab {
  id: string;
  title: string;
  content: string;
}

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage: React.FC = () => {
  const { tabId }: Readonly<Params<string>> = useParams();
  const visibleTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <Link to={`../${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabId ? (
          <p>{visibleTab?.title}</p>
        ) : (
          <p>Please select a tab</p>
        )}
      </div>
    </div>
  );
};

export default TabsPage;
