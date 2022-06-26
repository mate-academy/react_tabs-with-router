import { useParams, Link } from 'react-router-dom';

const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();

  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const selectedTab = tabId || 'tab-0';

  return (
    <div className="Tabs">
      <ul className="list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="list__item"
          >
            <Link
              className="btn"
              to={`/tabs/${tab.id}`}
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
      <h1>
        {selectedTab !== 'tab-0' ? (
          `Selected tab is ${selectedTab}`
        ) : ('Please select a tab')}
      </h1>
    </div>
  );
};

export default TabsPage;
