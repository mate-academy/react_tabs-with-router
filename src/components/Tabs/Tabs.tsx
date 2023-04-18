import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  const { tabId = 0 } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <ul>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(({ id, title }) => (
              <li
                key={id}
                data-cy="Tab"
                className={classNames({
                  'is-active': id === selectedTab?.id,
                })}
              >
                <Link to={`../${id}`}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {!selectedTab
            ? ('Please select a tab')
            : (selectedTab.content)}
        </div>
      </ul>
    </>
  );
};
