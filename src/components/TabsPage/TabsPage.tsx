import { useParams, Outlet } from 'react-router-dom';
import { NavButton } from '../NavButton';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  let selectedTab;

  if (tabId) {
    selectedTab = tabs.find(tab => tab.id === tabId);
  }

  return (
    <>
      <div className="navbar">
        {tabs.map(tab => (
          <NavButton
            key={tab.id}
            usePath={`/tabs/${tab.id}`}
            useName={tab.title}
          />
        ))}
      </div>
      {tabId
        ? <Outlet context={selectedTab} />
        : <h2>No tab selected</h2>}
    </>
  );
};
