import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

export const Tabs = () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  const tabContent = selectedTab
    ? selectedTab.content
    : 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => {
            return (
              <li
                data-cy="Tab"
                key={id}
                className={classNames({ 'is-active': tabId === id })}
              >
                <Link to={`/tabs/${id}`}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </>
  );
};
