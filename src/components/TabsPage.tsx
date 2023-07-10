import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[]
};

export const TabsPage: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTabContent = (tabs.find(tab => tab.id === tabId)?.content);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames(
                { 'is-active': tab.id === tabId },
              )}
              key={tab.id}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}

        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        { selectedTabContent || (
          'Please select a tab'
        )}
      </div>
    </>
  );
};
