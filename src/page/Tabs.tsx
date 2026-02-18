import { tabs } from '../Const/Tabs_Const';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import 'react-tabs/style/react-tabs.css'; // ← don't forget to import styles

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();

  // Find index of the active tab (or -1 if not found)
  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  // If tabId is invalid → show index -1 (no tab selected)
  const effectiveIndex = selectedIndex >= 0 ? selectedIndex : -1;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedIndex={effectiveIndex}
        // We don't use onSelect → navigation is done via <Link>
        // react-tabs will still visually highlight the correct tab
      >
        <TabList>
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              data-cy="Tab"
              // className is optional – react-tabs already handles .react-tabs__tab--selected
              // but you can still customize / override if needed
              className={classNames('react-tabs__tab', {
                // extra classes if you want Bulma-like look on top of react-tabs
                'is-active': tab.id === tabId,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </Tab>
          ))}
        </TabList>

        {tabs.map(tab => (
          <TabPanel key={tab.id} data-cy="TabContent">
            {tab.content}
          </TabPanel>
        ))}
      </Tabs>

      {/* Fallback when no/invalid tab is selected */}
      {effectiveIndex === -1 && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
