import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  tabId: string;
  selectedTab: Tab | undefined;
};

export const Tabs = ({ tabs, tabId, selectedTab }: Props) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            data-cy="Tab"
            key={tab.id}
            className={tab.id === tabId ? 'is-active' : ''}
          >
            <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="block" data-cy="TabContent">
      {selectedTab ? selectedTab.content : 'Please select a tab'}
    </div>
  </div>
);
