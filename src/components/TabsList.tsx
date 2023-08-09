import { useParams } from 'react-router-dom';
import TabItem from './TabItem';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsList = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find((tab) => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <TabItem tab={tab} key={tab.id} />
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};

export default TabsList;
