import { Link, useParams } from 'react-router-dom';

export const TabsPage = () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const { tabId } = useParams();
  const selectedTab = tabId ? tabId : '';

  const currentTask = tabs.find(tab => tab.id === selectedTab);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={selectedTab === tab.id ? 'is-active' : ''}
              key={tab.id}
            >
              <Link to={tab.id}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTask ? currentTask.content : 'Please select a tab'}
      </div>
    </>
  );
};
