import React from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';
import { TabContent } from './TabContent';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({
  tabs,
}) => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                key={tab.id}
                className={classNames(
                  {
                    'is-active': tabId && tabId === tab.id,
                  },
                )}
              >
                <Link
                  to={`${tab.id}`}
                >
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <TabContent />
    </>
  );
};
