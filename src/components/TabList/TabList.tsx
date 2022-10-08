import { useParams } from 'react-router-dom';
import { TabRender } from '../Tab/Tab';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabList = () => {
  const { tabId } = useParams();
  const tabContent = tabs.find(tab => tabId === tab.id);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabRender tab={tab} key={tab.id} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent?.content || 'Please select a tab'}
      </div>
    </>
  );
};
