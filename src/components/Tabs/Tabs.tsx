import { Link } from 'react-router-dom';

type Tab = {
  id: string;
  title: string;
  content: string;
};

type TabsProps = {
  tabs: Tab[];
  selectedTabId?: string;
};

export const Tabs = ({ tabs, selectedTabId }: TabsProps) => {
  const getTab = (tabId: string): Tab | undefined => {
    return tabs.find(tab => tab.id === tabId);
  };

  const selected = selectedTabId ? getTab(selectedTabId) : undefined;

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={
                  selected && tab.id === selected.id ? 'is-active' : ''
                }
                data-cy="Tab"
              >
                <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selected ? selected.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
