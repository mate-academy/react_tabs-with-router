import { Link, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import classNames from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  const selectedTab = useMemo(
    () => tabs.find(tab => tab.id === tabId),
    [tabId, tabs],
  );

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': id === tabId,
              })}
              key={id}
            >
              <Link to={`/tabs/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </div>
  );
};
