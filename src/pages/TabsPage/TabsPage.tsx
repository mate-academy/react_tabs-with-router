import classNames from 'classnames';
import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
}

export const TabsPage: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find((tab) => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                data-cy="Tab"
                className={classNames({ 'is-active': id === tabId })}
                key={id}
              >
                <Link to={`../${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
