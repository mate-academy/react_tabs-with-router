import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';
import { PageRoutes } from '../types/PageRoutes';

type Props = {
  tabs: Tab[],
  selectedTabsId?: string,
};

export const Tables:FC<Props> = ({ tabs, selectedTabsId }) => {
  const isSelected = (tab: Tab) => tab.id === selectedTabsId;

  return (
    <div className="container">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': isSelected(tab) })}
            >
              <Link
                to={isSelected(tab) ? PageRoutes.tabs : `${PageRoutes.tabs}/${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === selectedTabsId)?.content
          || 'Please select a tab'}
      </div>
    </div>
  );
};
