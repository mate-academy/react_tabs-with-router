import classNames from 'classnames';
import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

interface Props {
  tabs: Tab[]
}
export const Tabs: React.FC<Props> = ({
  tabs,
}) => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTab = tabs.find(tab => tabId === tab.id);

  return (
    <>
      <div className="card">
        <Outlet />
        <header className="card-header">
          {tabs.map(tab => (
            <Link
              to={`/tabs/${tab.id}`}
              className={classNames(
                'button',
                { 'is-link': tabId === tab.id },
              )}
              key={tab.id}
            >
              {tab.title}
            </Link>
          ))}
        </header>
      </div>
      <div className="card-footer">
        <div className="card-content">
          <div className="content">
            {selectedTab
              ? selectedTab.content
              : (<h2> Please select a tab </h2>)}
          </div>
        </div>
      </div>

    </>
  );
};
