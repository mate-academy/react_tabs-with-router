import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TabLink } from '../../components/TabLink';
import { Tab } from '../../types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const PageTabes: React.FC = () => {
  const [tabContent, setTabContent] = useState('Please select a tab');
  const { tabId } = useParams();

  useEffect(() => {
    if (!tabId) {
      setTabContent('Please select a tab');
    }
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabLink
              tab={tab}
              onSetTabContent={setTabContent}
              key={tab.id}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </>
  );
};
