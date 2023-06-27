import { FC } from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage: FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams();
  const activeTab = tabs.find((tab: Tab) => tab.id === tabId);

  return (
    <div className="container">
      <div data-cy="TabsComponent">
        <h1 className="title">Tabs page</h1>
        <div className="tabs is-boxed">
          <ul>
            {
              tabs.map(tab => (
                <li
                  className={classNames({
                    'is-active': tab.id === tabId,
                  })}
                  data-cy="Tab"
                  key={tab.id}
                >
                  <Link
                    data-cy="TabLink"
                    to={`/tabs/${tab.id}`}
                  >
                    {tab.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {activeTab ? (
            activeTab.content
          ) : (
            'Please select a tab'
          )}
        </div>
      </div>
    </div>
  );
};
