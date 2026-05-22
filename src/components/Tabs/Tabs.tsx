import { Link, useParams } from 'react-router-dom';
import { tabs } from '../../api/Tabs';

export const Tabs = () => {
  const { tabId } = useParams();

  const currentTab = tabs.find(tab => {
    return tab.id === tabId;
  });

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tabId === tab.id;

            return (
              <li
                key={tab.id}
                className={isActive ? 'is-active' : ''}
                data-cy="Tab"
              >
                <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
