import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams, useNavigate } from 'react-router-dom';

const tabsData = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = () => {
  const { tabId } = useParams();
  const navigate = useNavigate();

  const activeIndex = tabsData.findIndex(tab => tab.id === tabId);

  const handleSelect = (index: number) => {
    const tab = tabsData[index];
    if (tab) navigate(`/tabs/${tab.id}`);
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedIndex={activeIndex >= 0 ? activeIndex : undefined}
        onSelect={handleSelect}
      >
        <TabList>
          {tabsData.map(tab => (
            <Tab
              key={tab.id}
              data-cy="Tab"
              selectedClassName="is-active" // <- клас для Cypress
            >
              <a href={`#/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </a>
            </Tab>
          ))}
        </TabList>

        {tabsData.map(tab => (
          <TabPanel key={tab.id}>
            <div data-cy="TabContent">
              {tabId === tab.id ? tab.content : null}
            </div>
          </TabPanel>
        ))}

        {/* default content якщо tabId неправильний або не вибрано */}
        {(!tabId || activeIndex === -1) && (
          <div data-cy="TabContent">Please select a tab</div>
        )}
      </Tabs>
    </>
  );
};

export default TabsPage;
