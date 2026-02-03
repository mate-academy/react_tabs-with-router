import { Link, useParams } from 'react-router-dom';

type Tab = {
  id: string;
  title: string;
  content: string;
};

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const tabFind =
    tabs && Array.isArray(tabs) ? tabs.find(t => t.id === tabId) : undefined;

  return (
    <>
      <div>
        <h1 className="title">Tabs page</h1>
        <div data-cy="TabsComponent"></div>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={tabId === tab.id ? 'is-active' : ''}
              >
                <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {!tabId ? (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          {tabFind ? tabFind.content : 'Please select a tab'}
        </div>
      )}
    </>
  );
};
