import cn from 'classnames';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  // Guard against empty tabs array first
  if (!tabs || tabs.length === 0) {
    return (
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul />
        </div>
        <div className="block" data-cy="TabContent" />
      </div>
    );
  }

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <li
                  key={tab.id}
                  className={cn({ 'is-active': tab.id === tabId })}
                  data-cy="Tab"
                >
                  <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                    {tab.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabId
            ? tabs.find(tab => tab.id === tabId)?.content ||
              'Please select a tab'
            : 'Please select a tab'}
        </div>
      </div>
    </>
  );
};
