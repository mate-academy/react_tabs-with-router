import classNames from 'classnames';
import { NavLink, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1', count: 1 },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2', count: 2 },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3', count: 3 },
];

export const Tabs = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.reduce((num, tab) => {
    if (tab.id === tabId) {
      return tab.count;
    }

    return num;
  }, 0);

  const path = selectedTab ? '../' : '';

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.count}
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <NavLink to={`${path}${tab.id}`}>{tab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? `Some text ${selectedTab}` : 'Please select a tab'}
      </div>
    </>
  );
};
