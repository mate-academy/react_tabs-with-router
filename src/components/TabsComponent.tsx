// src/components/TabsComponent.tsx
import { Link, useParams } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { tabs } from '../data/tabs';
import { Tab as TabType } from '../types/Tab';

export default function TabsComponent() {
  const { tabId } = useParams<{ tabId?: string }>();

  // Якщо tabId відсутній в URL, findIndex поверне -1.
  // Передавши -1 у <Tabs>, ми гарантуємо, що жодна вкладка не буде підсвічена!
  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <Tabs selectedIndex={selectedIndex} onSelect={() => {}}>
      <div className="tabs is-boxed">
        <TabList className="">
          {tabs.map((tab: TabType) => {
            const active = tab.id === tabId;

            return (
              <Tab
                key={tab.id}
                data-cy="Tab"
                className={active ? 'is-active' : ''}
                selectedClassName="is-active"
              >
                <Link to={`/tabs/${tab.id}`} data-cy={`TabLink-${tab.id}`}>
                  {tab.title}
                </Link>
              </Tab>
            );
          })}
        </TabList>
      </div>

      {tabs.map((tab: TabType) => (
        <TabPanel key={tab.id} />
      ))}
    </Tabs>
  );
}
