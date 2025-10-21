import { Link, useNavigate, useParams } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const navigate = useNavigate();

  const ids = tabs.map(t => t.id);
  const selectedIndex = tabId ? ids.indexOf(tabId) : -1;
  const isValid = selectedIndex >= 0;

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <Tabs
          selectedIndex={isValid ? selectedIndex : 0}
          onSelect={i => navigate(`/tabs/${ids[i]}`)}
        >
          <div className="tabs is-boxed">
            <TabList>
              {tabs.map(t => (
                <Tab
                  key={t.id}
                  data-cy="Tab"
                  // ВНИМАНИЕ: не даём Bulma-класс, если tabId невалидный
                  selectedClassName={isValid ? 'is-active' : undefined}
                >
                  <Link to={`/tabs/${t.id}`}>{t.title}</Link>
                </Tab>
              ))}
            </TabList>
          </div>

          {isValid &&
            tabs.map(t => (
              <TabPanel key={t.id}>
                <div className="block" data-cy="TabContent">
                  {t.content}
                </div>
              </TabPanel>
            ))}
        </Tabs>

        {/* Фоллбек, если tabId нет или он не из списка */}
        {!isValid && (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}
      </div>
    </div>
  );
};
