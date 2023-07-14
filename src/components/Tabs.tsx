import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type TabsProps = {
  tabs: Tab[];
  selectedTab: Tab | undefined;
};

export const Tabs: React.FC<TabsProps> = ({ tabs, selectedTab }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={classNames(
              { 'is-active': selectedTab && selectedTab.id === tab.id },
            )}
          >
            <Link to={`../${tab.id}`}>{tab.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
