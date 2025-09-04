import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TabsContext } from '../../context/TabsProvider';
import classNames from 'classnames';

export const TabsPage = () => {
  const { tabId } = useParams();
  const tabs = useContext(TabsContext);
  const selectedTab = tabs.find(tab => tab.id === tabId);
  const tabValidate = selectedTab?.id !== '' && selectedTab !== undefined;

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({ 'is-active': tabId === tab.id })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabValidate ? selectedTab?.content : 'Please select a tab'}
      </div>
    </div>
  );
};
