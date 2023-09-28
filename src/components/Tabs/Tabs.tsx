import { useParams } from 'react-router-dom';
import { Tab } from '../Tab/Tab';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  const { tabId } = useParams();
  const selectTabId = tabId || '';

  const selectTab = tabs.find(tab => tab.id === selectTabId);

  return (
    <div className="container">

      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return <Tab tab={tab} selectTabId={selectTabId} />;
          })}
        </ul>
      </div>

      {!selectTabId && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}

      {selectTabId && (
        <div className="block" data-cy="TabContent">
          {selectTab?.content}
        </div>
      )}
    </div>
  );
};
