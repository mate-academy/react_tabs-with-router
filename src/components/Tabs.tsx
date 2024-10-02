import { FC, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

import { TabsContext } from '../store/TabsContext';

export const Tabs: FC = () => {
  const tabs = useContext(TabsContext);

  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn({
                'is-active': tab.id === selectedTab?.id,
              })}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
