import cn from 'classnames';
import { useContext } from 'react';
import { TabsContext } from '../Context/TabsContext';
import { Link, useParams } from 'react-router-dom';

export const Tabs = () => {
  const tabs = useContext(TabsContext);

  const { tabId } = useParams();

  const selectedTabId = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': selectedTabId?.id === tab.id })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabId ? selectedTabId.content : 'Please select a tab'}
      </div>
    </>
  );
};
