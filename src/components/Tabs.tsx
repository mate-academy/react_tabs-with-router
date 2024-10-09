import { Tab } from '../types/Tab';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

interface TabsProps {
  tabs: Tab[];
  activeTabId: string;
}

export const Tabs: React.FC<TabsProps> = ( {tabs, activeTabId, } ) => {
  // const getLinkClass = ({ isActive } : { isActive: boolean }) => classNames({ 'is-active' : isActive});
  // const activeTab = tabs.filter((tab ) => tab.id === activeTabId)?.content;
  return (
      <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({"is-active" : tab.id === activeTabId })}
              >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">{tab.title}</Link>
            </li>
            ))}
          </ul>
    </div>
  );
};


