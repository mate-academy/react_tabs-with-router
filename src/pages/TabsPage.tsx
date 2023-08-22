import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { TabContent } from '../components/TabContent';
import { tabs } from '../utils/constants';

export const TabsPage = () => {
  const { tabId = null } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  const selectedTabContent = selectedTab?.content || 'Please select a tab';

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
                'is-active': tabId === tab.id,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <TabContent>{selectedTabContent}</TabContent>
    </>
  );
};
