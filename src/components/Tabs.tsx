import React from 'react';
import { useParams } from 'react-router-dom';
import { TabItem } from './TabItem';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[]
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map((tab: Tab) => {
              return (
                <TabItem key={tab.id} tab={tab} active={activeTab} />
              );
            })
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {
          activeTab
            ? activeTab.content
            : 'Please select a tab'
        }
      </div>
    </>
  );
};
