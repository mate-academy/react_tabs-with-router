import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

export const Tabs = () => {
  const tabList = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];
  const { tabId } = useParams<{ tabId?: string }>();
  const activeTab = tabList.find(t => t.id === tabId);
  const content = activeTab ? activeTab.content : 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabList.map(tab => (
            <li
              className={classNames({
                'is-active': tab.id === tabId,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </>
  );
};
