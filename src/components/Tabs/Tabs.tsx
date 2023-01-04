import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  const { tabId } = useParams();

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ title, id }) => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': id === tabId })}
              key={id}
            >
              <Link to={id}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabId ? (
          tabs.find(({ id }) => tabId === id)?.content
        ) : (
          'Please select a tab'
        )}
      </div>
    </>
  );
};
