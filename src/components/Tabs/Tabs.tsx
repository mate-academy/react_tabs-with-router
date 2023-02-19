import cn from 'classnames';
import { Link, useMatch } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: React.FC = () => {
  const tabMatch = useMatch('/tabs/:tabId');
  const currentTabId = tabMatch?.params.tabId;

  const currentTab = tabs.find(tab => tab.id === currentTabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({
            id,
            title,
          }) => (
            <li
              key={id}
              data-cy="Tab"
              className={cn({ 'is-active': id === currentTabId })}
            >
              <Link
                to={`/tabs/${id}`}
              >
                {title}
              </Link>
            </li>

          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab ? (
          `${currentTab.content}`
        ) : (
          'Please select a tab'
        )}
      </div>
    </>
  );
};
