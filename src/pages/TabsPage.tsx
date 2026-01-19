import { useParams, useNavigate, Link } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { tabs } from '../types/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const navigate = useNavigate();

  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);
  const isValid = selectedIndex !== -1;

  const handleSelect = (index: number) => {
    navigate(`/tabs/${tabs[index].id}`);
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedIndex={isValid ? selectedIndex : -1}
        onSelect={handleSelect}
        defaultFocus={false}
      >
        <TabList>
          {tabs.map(tab => (
            <Tab key={tab.id} data-cy="Tab" selectedClassName="is-active">
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </Tab>
          ))}
        </TabList>

        {isValid &&
          tabs.map(tab => (
            <TabPanel key={tab.id}>
              <div className="block" data-cy="TabContent">
                {tab.content}
              </div>
            </TabPanel>
          ))}
      </Tabs>

      {!isValid && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
