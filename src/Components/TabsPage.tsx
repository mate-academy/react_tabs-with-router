import classNames from 'classnames';
import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[],
}

export const TabsPage: FC<Props> = ({ tabs }) => {
  const { tabId = '/' } = useParams();

  const getTabContentById = () => {
    return tabs.find(tab => tab.id === tabId)?.content || 'Please select a tab';
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                className={classNames(
                  '', { 'is-active': tab.id === tabId },
                )}
                key={tab.id}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {getTabContentById()}
      </div>
    </>
  );
};
