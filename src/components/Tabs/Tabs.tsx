import classNames from 'classnames';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({
  tabs,
}) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => `:${tab.id}` === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              const { id, title } = tab;

              return (
                <li
                  key={id}
                  className={classNames({
                    'is-active':
                      selectedTab?.id === id,
                  })}
                  data-cy="Tab"
                >
                  <Link
                    to={`../${id}`}
                    data-cy="TabLink"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab
            ? selectedTab.content
            : 'Please select a tab'}
        </div>
      </div>
    </>

  );
};
