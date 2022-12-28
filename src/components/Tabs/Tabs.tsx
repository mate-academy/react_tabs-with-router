import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string | null;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
}) => {
  const currentSelectedTab = tabs
    .find(tab => selectedTabId === tab.id);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames(
                { 'is-active': tab.id === selectedTabId },
              )}
              data-cy="Tab"
            >
              <Link
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {
          currentSelectedTab
            ? currentSelectedTab.content
            : 'Please select a tab'
        }
      </div>
    </div>
  );
};
