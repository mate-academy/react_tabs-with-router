import { Link, useOutletContext, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

export const TabsPage = () => {
  const tabs = useOutletContext<Tab[]>();
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({
                'is-active': tabId === tab.id,
              })}
            >
              <Link to={tab.id}>{tab.title}</Link>
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
