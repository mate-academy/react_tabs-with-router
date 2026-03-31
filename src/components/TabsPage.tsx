import classNames from 'classnames';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);
  const navigate = useNavigate();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedIndex={selectedIndex === -1 ? 0 : selectedIndex}
        onSelect={index => {
          navigate(`/tabs/${tabs[index].id}`);
        }}
      >
        <TabList>
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active':
                  selectedIndex !== -1 && tabs[selectedIndex].id === tab.id,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </Tab>
          ))}
        </TabList>

        {tabs.map(tab => (
          <TabPanel key={tab.id}>
            <div data-cy="TabContent">
              {selectedIndex === -1 ? 'Please select a tab' : tab.content}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};
