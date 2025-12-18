import { Link, useParams } from 'react-router-dom';

export function TabsPage() {
  const { tabId } = useParams();
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];
  const active = tabs.find(t => t.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(t => (
            <li
              data-cy="Tab"
              key={t.id}
              className={t.id === tabId ? 'is-active' : ''}
            >
              <Link to={`/tabs/${t.id}`}>{t.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {active ? active.content : 'Please select a tab'}
      </div>
    </>
  );
}
