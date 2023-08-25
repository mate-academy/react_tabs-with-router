import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string | undefined;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId }) => {
  const selectedTab = tabs.find(({ id }) => selectedTabId === id);

  return (
    <div data-cy="TabsComponent">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              data-cy="Tab"
              key={id}
              className={cn({ 'is-active': id === selectedTabId })}
            >
              <Link to={`/tabs/${id}`} data-cy="TabLink">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : <p>Please select a tab</p>}
      </div>
    </div>
  );
};
