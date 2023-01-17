import React from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
// import { Tab } from '../Tab/Tab';

type TabStype = {
  id: string;
  title: string;
  content: string;
};

interface Props {
  tabs: TabStype[];
}

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              data-cy="Tab"
              className={cn('', {
                'is-active': tab.id === tabId,
              })}
              key={tab.id}
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

      <div
        className="block"
        data-cy="TabContent"
        key={tabId}
      >
        {
          !tabId || !tabs.some(tab => tab.id === tabId)
            ? <p>Please select a tab</p>
            : tabs.map((tab) => tab.id === tabId
              && tab.content)
        }

      </div>

    </>
  );
};
