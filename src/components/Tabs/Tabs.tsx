import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
}) => {
  const selectedTab = tabs.find(tab => `Tab-${tab.id}` === selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames(
                { 'is-active': `Tab-${tab.id}` === selectedTabId },
              )}
            >
              <Link
                to={`/tabs/${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : <span>Please select a tab</span>}
      </div>
    </div>
  );
};
