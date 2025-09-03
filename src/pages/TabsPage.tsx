// import { NavLink } from 'react-router-dom';
// import cn from 'classnames';
import 'bulma/css/bulma.css';
import { TabItem } from './TabItem';
import { tabs } from '../api/tabs';
import { useEffect, useState } from 'react';
import { Tab } from '../api/type/Tab';
import { useParams } from 'react-router-dom';

export const TabsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>();
  const { tabId } = useParams();

  useEffect(() => {
    if (tabId) {
      const tab = tabs.find(table => table.id === tabId);

      setActiveTab(tab);
    }
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return <TabItem tab={tab} key={tab.id} />;
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabId && activeTab ? activeTab?.content : 'Please select a tab'}
      </div>
    </>
  );
};
