import React from 'react';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type TabsProps = {
  tabs: Tab[];
};

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const { id } = useParams();
  const selectedTab = tabs.find(tab => tab.id === id);

  return (
    <>
      <h1 className="title">Tabs</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn('', { 'is-active': tab.id === id })}
            >
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {
          selectedTab ? selectedTab.content : 'Please select a tab'
        }
      </div>
    </>
  );
};

export default Tabs;
