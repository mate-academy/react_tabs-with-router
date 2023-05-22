import { Link } from 'react-router-dom';
import classNames from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {
  selectedTabId: string | undefined;
};

export const Tabs: React.FC<Props> = ({ selectedTabId }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': selectedTabId === tab.id })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {selectedTab
        ? (
          <div className="block" data-cy="TabContent">
            {selectedTab.content}
          </div>
        )
        : (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}
    </>
  );
};
