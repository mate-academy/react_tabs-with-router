import React from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(({ id }) => id === tabId);

  return (
    <div className="section">
      <div className="container">
        <div className="tabs is-boxed">
          <ul>
            {
              tabs.map(({ id, title }) => (
                <li
                  data-cy="Tab"
                  className={classNames({ 'is-active': id === tabId })}
                >
                  <Link to={`../${id}`}>{title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      <div className="block" data-cy="TabContent">
        {
          selectedTab
            ? selectedTab.content
            : 'Please select a tab'
        }
      </div>
    </div>
  );
};
