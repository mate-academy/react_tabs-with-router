import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(el => tabId === el.id);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(({ id, title }) => (
              <li
                className={classNames({
                  'is-active': id === tabId,
                })}
                data-cy="Tab"
                key={id}
              >
                <Link to={`../${id}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab?.content || 'Please select a tab'}
        </div>
      </div>
    </>
  );
};
