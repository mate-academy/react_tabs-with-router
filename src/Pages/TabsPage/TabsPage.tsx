import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[]
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              data-cy="Tab"
              className={`${tabId === id ? 'is-active' : ''}`}
            >
              <Link
                to={`/tabs/${id}`}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabId ? `${tabs.find((el: Tab) => el.id === tabId)?.content}` : 'Please select a tab'}
      </div>
    </>
  );
};
