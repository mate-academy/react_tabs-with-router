import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useState } from 'react';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabsPage:React.FC<Props> = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState<Tab>();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': currentTab?.id === tab.id })}
            >
              <Link
                to={`/tabs/${tab.id}`}
                onClick={() => setCurrentTab(tab)}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {currentTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
