import { Link } from 'react-router-dom';
import { Tab } from './types/Tab';

type Props = {
  tabs: Tab[];
  activeTabId?: string;
};

export const Tabs: React.FC<Props> = ({ tabs, activeTabId }) => {
  const active = tabs.find(tab => tab.id === activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === active?.id ? 'is-active' : ''}
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
        {active ? active.content : 'Please select a tab'}
      </div>
    </div>
  );
};
