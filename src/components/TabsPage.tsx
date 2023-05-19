import { Link, useParams } from 'react-router-dom';
import classnames from 'classnames';
import { Tab } from '../types/Tab';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = () => {
  const { tabId } = useParams();
  let currentTab = tabs.find(tab => tab.id === tabId) as Tab;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.content}
              className={classnames({
                'is-active': currentTab?.id === tab.id,
              })}
            >
              <Link
                to={`/tabs/${tab.id}`}
                onClick={() => {
                  currentTab = tab;
                }}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};

export default TabsPage;
