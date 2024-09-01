import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              // className={classNames({ 'is-active': id === tabId })}
              className={classNames({ 'is-active': id === tabId })}
              data-cy="Tab"
            >
              <Link to={`/tabs/${id}`} data-cy="TabLink">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {!selectedTab ? (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      )}
    </>
  );
};
