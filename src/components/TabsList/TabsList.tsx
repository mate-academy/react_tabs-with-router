import classNames from 'classnames';
import { NavLink, useParams } from 'react-router-dom';
// import { TabsItem } from './TabsItem';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsList = () => {
  const { tabId } = useParams();
  const isLinkActive = (id: string) => id === tabId;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': isLinkActive(tab.id) })}
              key={tab.id}
            >
              <NavLink to={`${tab.id}`}>{`${tab.title}`}</NavLink>
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
