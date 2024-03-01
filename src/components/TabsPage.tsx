import { useContext } from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { TabsContext } from '../data/TabsContext';

export const TabsPage = () => {
  const tabs = useContext(TabsContext);
  const { tabId } = useParams();

  return (
    <div className="container">
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
    </div>
  );
};
