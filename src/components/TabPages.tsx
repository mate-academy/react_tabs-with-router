import { NavLink, useParams } from 'react-router-dom';
import { tabs } from '../date';

export const TabPages: React.FC = () => {
  const { tabsId } = useParams();

  const currentTab = tabs.find(tab => tab.id === tabsId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={tabsId === tab.id ? 'is-active' : ''}
              >
                <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </>
  )
}