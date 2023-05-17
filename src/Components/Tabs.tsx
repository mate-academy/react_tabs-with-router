import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTab: Tab | null;
}

export const Tabs: React.FC<Props> = memo(({ tabs, selectedTab }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={tab.id === selectedTab?.id ? 'is-active' : ''}
          >
            <Link to={`../${tab.id}`} data-cy="TabLink">
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});
