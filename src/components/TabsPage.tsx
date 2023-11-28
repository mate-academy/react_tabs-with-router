import { useParams, Navigate } from 'react-router-dom';
import { Tab } from './Tab';
import { Tab as TabType } from '../types/Tab';

const tabs: TabType[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();

  if (tabId && !tabs.find((tab) => tab.id === tabId)) {
    return <Navigate to=".." />;
  }

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <Tab key={tab.id} tab={tab} />
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {
          !tabId
            ? 'Please select a tab'
            : tabs.find((tab) => tab.id === tabId)?.content
        }
      </div>
    </>
  );
};
