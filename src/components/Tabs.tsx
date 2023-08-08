/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export type TabProps = {
  title: string;
  content: string;
  id: string;
};

type TabsProps = {
  tabs: TabProps[];
};

const Tabs = ({ tabs }: TabsProps) => {
  const [tabId, setTabId] = useState('Tab 1');

  return (
    <div data-cy="TabsComponent">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              className={classNames({
                'is-active': tab.id === tabId,
              })}
              data-cy="Tab"
              key={tab.id}
              onClick={() => setTabId(tab.id)}
            >
              <Link to={`/tabs/:${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block">
        {tabs.map((tab) => (
          <div
            className={classNames({
              'is-hidden': tab.id !== tabId,
            })}
            key={tab.id}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
