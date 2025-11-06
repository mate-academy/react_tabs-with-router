import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  const { tabId } = useParams();
  let active;

  if (tabId) {
    active = tabs.find(t => t.id === tabId) || null;
  } else {
    active = null;
  }

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <div>
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={cn({
                  'is-active': tabId === tab.id,
                })}
                data-cy="Tab"
              >
                <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="block" data-cy="TabContent" key={active?.id || 0}>
            {active?.content ? active.content : 'Please select a tab'}
          </div>
        </div>
      </div>
    </div>
  );
};
