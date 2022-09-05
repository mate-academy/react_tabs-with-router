import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { TabLink } from './TabLink';

interface Props {
  tabs: Tab[]
}

export const TabsPage:React.FC<Props> = ({ tabs }) => {
  const [tabText, setTabText] = useState('Please select a tab');
  const { tabId = '' } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabLink
              tab={tab}
              key={tab.id}
              setTabText={setTabText}
              tabId={tabId}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {tabText}
      </div>
    </>
  );
};
