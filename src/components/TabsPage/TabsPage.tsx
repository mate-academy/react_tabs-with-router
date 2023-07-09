import { FC } from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
}

export const TabsPage: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find((tab) => (
    tab.id === tabId
  )) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': tab.id === tabId,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <Link
                to={`/tabs/${tab.id}`}
                data-cy="Tab"
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
