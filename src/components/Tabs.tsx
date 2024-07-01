import { NavLink, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

export interface TabsProps {
  tabs: Tab[];
  updateText: (tabId?: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, updateText }) => {
  const { tabId } = useParams();
  const selectedTab = tabId;
  const tab: Tab | undefined = tabs.find(tab => tab.id === selectedTab);

  updateText(tab?.content);

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            data-cy="Tab"
            className={`${selectedTab === tab.id ? 'is-active' : ''} `}
            key={tab.id}
          >
            <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
