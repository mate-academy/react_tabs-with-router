import { NavLink, useParams } from 'react-router-dom';
import { tabs } from '../utils/tabs';

export const TabsPage = () => {
  const tabParams = useParams();
  const { tabId } = tabParams;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              data-cy="Tab"
              className={tabId === tab.id
                ? 'is-active'
                : ''}
              key={tab.id}
            >
              <NavLink to={tab.id}>{tab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === tabId)
          ? tabs.find(tab => tab.id === tabId)?.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
