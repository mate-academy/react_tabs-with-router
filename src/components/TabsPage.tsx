import React from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../react-app-env';

type Props = {
  tabs: Tab[],
};

const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const findTab = tabs.find(tab => tabId === tab.id);

  const content = tabId === undefined || findTab === undefined
    ? 'Please select a tab'
    : findTab.content;

  return (
    <section>
      <nav className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <p>
        {content}
      </p>
    </section>
  );
};

export default TabsPage;
