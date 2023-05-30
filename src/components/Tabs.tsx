import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTab?: string;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab }) => {
  const isSelected = (tab: Tab) => tab.id === selectedTab;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': isSelected(tab) })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
