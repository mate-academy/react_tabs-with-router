import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

import './Tabs.css';

interface Props {
  tabs: Tab[];
  value: Tab | null;
  onChange: (tab: Tab) => void;
}

export const Tabs = ({ tabs, value, onChange }: Props) => {
  const tabSelection = (tab: Tab) => {
    if (value?.id !== tab.id) {
      return tab;
    }

    return value;
  };

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={value?.id === tab.id ? 'is-active' : ''}
            data-cy="Tab"
          >
            <Link
              to={`/tabs/${tab.id}`}
              data-cy="TabLink"
              onClick={() => onChange(tabSelection(tab))}
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
