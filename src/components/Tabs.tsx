import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import type { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs = ({ tabs }: Props) => {
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': tab.id === activeTab?.id })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
