import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from './types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const currentTab = useMemo(() => {
    return tabs.find((tab) => tab.id === tabId);
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                className={classNames({ 'is-active': tab.id === tabId })}
                key={tab.id}
              >

                <Link to={`/tabs/${tab.id}`}>
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
