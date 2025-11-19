import { Tabs, TabList, TabPanel } from 'react-tabs';
import { Link, useParams, useNavigate } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const navigate = useNavigate();

  const activeIndex = tabs.findIndex(tab => tab.id === tabId);

  const handleSelect = (index: number) => {
    navigate(`/tabs/${tabs[index].id}`);
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedIndex={activeIndex >= 0 ? activeIndex : -1}
        onSelect={handleSelect}
      >
        <TabList hidden />

        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab, index) => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={index === activeIndex ? 'is-active' : ''}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {tabs.map(tab => (
          <TabPanel key={tab.id} />
        ))}
      </Tabs>

      <div className="block" data-cy="TabContent">
        {activeIndex === -1 ? (
          <>Please select a tab</>
        ) : (
          <>{tabs[activeIndex].content}</>
        )}
      </div>
    </>
  );
};
