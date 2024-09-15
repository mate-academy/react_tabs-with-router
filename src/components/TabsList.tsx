import classNames from 'classnames';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsList: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);
  const content = selectedTab ? selectedTab.content : 'Please select a tab';

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;
            const isSelected = tabId === id;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={classNames({
                  'is-active': isSelected,
                })}
              >
                <Link to={id} data-cy="TabLink">
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </>
  );
};
