import { useParams } from 'react-router-dom';
import { TabList } from '../components/tablist';
import { findTabById } from './findtabid';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId = '' } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabList tabs={tabs} selectedTab={tabId} />

      <div className="block" data-cy="TabContent">
        {tabId ? (
          findTabById(tabs, tabId)
        ) : (
          'Please select a tab'
        )}
      </div>
    </>
  );
};
