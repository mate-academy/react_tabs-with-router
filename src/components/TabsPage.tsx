import classNames from 'classnames';
import { NavLink, useParams } from 'react-router-dom';

const linkClassName = (
  { isActive } : { isActive : boolean },
) => classNames('navbar-item', { 'is-active': isActive });

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li data-cy="Tab" key={tab.id}>
              <NavLink
                to={`/tabs/${tab.id}`}
                data-cy="TabLink"
                className={linkClassName}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {selectedTab?.content ? (
        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
