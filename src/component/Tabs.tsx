import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  const { tabId } = useParams();

  const selectedTabById = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              className={cn({
                'is-active': id === tabId,
              })}
              data-cy="Tab"
              key={id}
            >
              <Link
                to={`/tabs/${id}`}
                data-cy="TabLink"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {selectedTabById?.content || 'Please select a tab'}
      </div>
    </>
  );
};
