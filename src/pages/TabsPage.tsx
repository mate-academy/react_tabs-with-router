import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId = '' } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);
  const visibleContent = selectedTab?.content || 'Please select a tab';

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(({ title, id }) => (
              <li
                key={id}
                data-cy="Tab"
                className={classNames({
                  'is-active': tabId === id,
                })}
              >
                <Link to={id}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {visibleContent}
        </div>
      </div>
    </div>
  );
};
