import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type TabsProps = {
  tabs: Tab[];
};

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn('', { 'is-active': tab.id === tabId })}
            >
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
