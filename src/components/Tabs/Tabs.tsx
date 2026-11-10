import { Link } from 'react-router-dom';

type Tab = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tabs: Tab[];
  selectedTabId?: string;
};

export const Tabs = ({ tabs, selectedTabId }: Props) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === selectedTabId ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
