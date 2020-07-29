import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../src/Tab';
import { TabsNavigation } from './TabsNavigation';

interface Props {
  tabs: Tab[];
}
interface ParamTypes {
  tabId?: string;
}

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<ParamTypes>();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <section className="tabs">
      <h2>
        Tabs page
      </h2>
      <TabsNavigation tabs={tabs} />
      {
        selectedTab
                && (
                  <p className="tabs__content">
                    {selectedTab.content}
                  </p>
                )
      }
    </section>
  );
};