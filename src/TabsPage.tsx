import { useNavigate, useParams, Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const navigate = useNavigate();

  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <Tabs
          selectedIndex={selectedIndex === -1 ? undefined : selectedIndex}
          onSelect={index => navigate(`/tabs/${tabs[index].id}`)}
        >
          <TabList>
            {tabs.map(tab => (
              /* Тест хочет видеть data-cy="Tab" и класс is-active здесь */
              <Tab key={tab.id} data-cy="Tab" selectedClassName="is-active">
                {/* Тест требует наличия <a> внутри.
                    Мы используем Link, но отключаем его стандартное поведение,
                    так как переключением занимается библиотека через onSelect.
                */}
                <Link to={`/tabs/${tab.id}`} onClick={e => e.preventDefault()}>
                  {tab.title}
                </Link>
              </Tab>
            ))}
          </TabList>

          <div className="block" data-cy="TabContent">
            {tabs.map(tab => (
              <TabPanel key={tab.id}>{tab.content}</TabPanel>
            ))}

            {selectedIndex === -1 && <p>Please select a tab</p>}
          </div>
        </Tabs>
      </div>
    </>
  );
};
