import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { TabsContext } from '../../context/TabsProvider';

export const TabsPage = () => {
  const { tabId } = useParams();
  const tabs = useContext(TabsContext);

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': tab.id === selectedTab?.id,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? <p>{selectedTab.content}</p> : 'Please select a tab'}
      </div>
    </>
  );
};
