import classNames from 'classnames';
import React from 'react';
import { Link, useMatch } from 'react-router-dom';
// import { PageNavLink } from '../components/PageNavLink';
import { Tab } from '../types/Tab';

type Props = {
  tabs:Tab[];
};

export const TabsPage:React.FC <Props> = ({ tabs }) => {
  const match = useMatch('/tabs/:id');
  const activeId = match?.params.id || 0;
  const activeTab = tabs.find(tab => tab.id === activeId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({
                'is-active': tab.id === activeId,
              })}
            >
              <Link
                to={`../${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}

        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        { !activeTab
          ? 'Please select a tab'
          : activeTab.content}
      </div>
    </>

  );
};
