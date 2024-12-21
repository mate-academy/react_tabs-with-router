import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TabsContext } from '../store/TabsContext';
import classNames from 'classnames';

export const TabsPage = () => {
  const tabs = useContext(TabsContext);
  const { tabId } = useParams();

  const isMatch = tabs.find(tab => tabId === tab.id);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === tabId)?.content}
      </div>
      {!isMatch && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};

TabsPage.displayName = 'TabsPage';
