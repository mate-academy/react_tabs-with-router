import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { useTabContext } from '../context/TabContext';

export const TabsPage = () => {
  const { tabId } = useParams();
  const { tabs } = useTabContext();

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
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!selectedTab ? 'Please select a tab' : selectedTab.content}
      </div>
    </>
  );
};
