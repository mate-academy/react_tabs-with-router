import { NavLink, useOutletContext, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

export const TabsComponent = () => {
  const { tabs } = useOutletContext<{ tabs: Tab[] }>();
  const { tabId } = useParams();

  const isLinkActive = (id: string) => id === tabId;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={isLinkActive(tab.id) ? 'is-active' : ''}
            >
              <NavLink to={`${tab.id}`}>{tab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === tabId)?.content || 'Please select a tab'}
      </div>
    </>
  );
};
