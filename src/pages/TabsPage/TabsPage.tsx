import { useParams } from 'react-router-dom';
import { Tab } from '../../components/Tab/Tab';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();

  const visibleTabs = tabs.find(tab => tab.id === tabId);
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tab key={tab.id} {...tab} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabId && visibleTabs ? visibleTabs.content : 'Please select a tab'}
      </div>
    </>
  );
};
