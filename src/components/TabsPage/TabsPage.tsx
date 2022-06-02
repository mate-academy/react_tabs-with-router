import { NavLink, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { tabs } from '../../tabs';
import './TabsPage.scss';

const Tabs = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="tabs__item"
          >
            <NavLink
              to={tab.id}
              className={classNames(
                'tabs__link',
                { 'tabs__link--active': tab.id === tabId },
              )}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      {selectedTab ? (
        <p className="tabs__content">{selectedTab.content}</p>
      ) : (
        <p className="tabs__content">Please select a tab</p>
      )}
    </div>
  );
};

export default Tabs;
