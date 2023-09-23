import { Link, useParams } from 'react-router-dom';
import classnames from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  const { tabId } = useParams();

  const tabContent = tabs.find(({ id }) => tabId === id)?.content;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                data-cy="Tab"
                className={classnames({
                  'is-active': tabId === id,
                })}
                key={id}
              >
                <Link
                  to={`/tabs/${id}`}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!tabContent ? (
          'Please select a tab'
        ) : (
          tabContent
        )}
      </div>
    </>
  );
};
