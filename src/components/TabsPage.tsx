import { Link, useParams } from 'react-router-dom';
import { TabContent } from './TabContent';

export const TabsPage = () => {
  const { tabId } = useParams();

  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  return (
    <div>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                key={tab.id}
                className={tab.id === tabId ? 'is-active' : ''}
              >
                {tabId ? (
                  <Link to={`../${tab.id}`}>{tab.title}</Link>
                ) : (
                  <Link to={tab.id}>{tab.title}</Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <TabContent tabs={tabs} tabId={tabId} />
    </div>
  );
};
