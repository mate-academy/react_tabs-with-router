import { FC } from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabsPage: FC<Props> = ({ tabs }) => {
  const params = useParams();
  const activeTab = tabs.find(tab => params.tabId === tab.id);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="tab"
              className={classNames({ 'is-active': params.tabId === tab.id })}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        <p>
          {
            activeTab
              ? activeTab.content
              : 'Please select a tab'
          }
        </p>
      </div>
    </>
  );
};
