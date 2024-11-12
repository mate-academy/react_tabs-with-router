import classNames from 'classnames';
import { Link, Outlet, useParams } from 'react-router-dom';
import { Tab } from './types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);
  const tabContent = activeTab ? activeTab.content : 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({ 'is-active': activeTab === tab })}
            >
              <Link to={tab.id}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>

      <Outlet />
    </>
  );
};
