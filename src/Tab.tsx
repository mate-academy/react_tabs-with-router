import classNames from 'classnames';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = ({
  tabs,
}) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="section">
      <h1 className="title">Tabs page</h1>

      <div data-cy="TabsComponent">
        <div
          className="tabs is-boxed"
          style={{ marginBottom: '24px' }}
        >
          <ul>
            {tabs.map(tab => (
              <li
                data-cy="Tab"
                key={tab.id}
                className={classNames('',
                  { 'is-active': tabId === tab.id })}
              >
                <Link
                  to={`/tabs/${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {selectedTab?.content}
        </div>
      </div>
    </div>
  );
};
