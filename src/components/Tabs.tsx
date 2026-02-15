import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';
import {
  Tabs as ReactTabs,
  TabList,
  Tab as ReactTab,
  TabPanel,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

type Props = {
  selectedTabId?: string;
};

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = ({ selectedTabId }: Props) => {
  const selectedIndex = tabs.findIndex(tab => tab.id === selectedTabId);

  return (
    <ReactTabs selectedIndex={selectedIndex === -1 ? -1 : selectedIndex}>
      <TabList>
        {tabs.map(tab => (
          <ReactTab key={tab.id} data-cy="Tab" selectedClassName="is-active">
            <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
          </ReactTab>
        ))}
      </TabList>

      {tabs.map(tab => (
        <TabPanel key={tab.id} data-cy="TabContent">
          {tab.content}
        </TabPanel>
      ))}

      {selectedIndex === -1 && (
        <div data-cy="TabContent">Please select a tab</div>
      )}
    </ReactTabs>
  );
};
