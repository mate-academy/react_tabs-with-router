import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState<Tab | null>(null);
  const { tabId } = useParams();

  useEffect(() => {
    if (tabId) {
      setCurrentTab(tabs?.find(item => item.id === tabId) ?? null);
    } else {
      setCurrentTab(null);
    }
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs?.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': tabId === tab.id })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
