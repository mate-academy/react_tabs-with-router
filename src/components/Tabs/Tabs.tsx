import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  selectedTab: Tab | null;
  tabs: Tab[];
}

export const Tabs: React.FC<Props> = (props) => {
  const { selectedTab, tabs } = props;

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li key={tab.id}>
            <Link
              href={tab.id}
              to={`/tabs/${tab.id}`}
              className={classNames({
                'nav-link': true,
                active: tab.id === selectedTab?.id,
              })}
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>


      {selectedTab ? (
        <p>
        {selectedTab.content}
      </p>
      ) : (
        <p>There is no such tab</p>
      )}
    </>
  );
};
