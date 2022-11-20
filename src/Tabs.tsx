import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from './types/Tab';

type Props = {
  tabs: Tab[];
  selectedTab?: Tab;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
}) => {
  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => {
              return (
                <li
                  key={tab.id}
                  className={classNames(
                    { 'is-active': tab.id === selectedTab?.id },
                  )}
                >
                  <Link
                    to={`/tabs/${tab.id}`}
                    data-cy="Tab"
                  >
                    {tab.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
