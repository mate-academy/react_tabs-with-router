import React from 'react';
import classNames from 'classnames';
import {
  Link,
  useParams,
} from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[] | undefined;
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const isSelected = (tab: Tab) => tab.id === tabId;
  const tabContent = () => {
    return tabs?.find(tab => tab.id === tabId);
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs?.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': isSelected(tab) })}
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
        {tabContent() ? tabContent()?.content : 'Please select a tab'}
      </div>
    </>
  );
};
