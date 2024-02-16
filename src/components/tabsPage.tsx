import classNames from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const TabsPage = () => {

  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];
  
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
    <div className="container">
    <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li data-cy="Tab" className={classNames({
              'is-active': tabId === tab.id,
            })} 
            key={tab.id}>
              <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      </div>
      {selectedTab 
          ? selectedTab.content
          : <div className="block" data-cy="TabContent">
              Please select a tab
            </div>
        }
      <Outlet />
    </>
  )
}