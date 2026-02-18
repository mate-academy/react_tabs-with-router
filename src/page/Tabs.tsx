import { tabs } from '../Const/Tabs_Const';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

export const TabsPage = () => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(el => el.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({
                  'is-active': selectedTab?.id === tab.id,
                })}
              >
                <Link to={tab.id}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
