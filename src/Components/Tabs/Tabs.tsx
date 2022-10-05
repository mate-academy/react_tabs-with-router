import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  tabId?: string;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  tabId,
}) => {
  const selectedTab = tabs.find(tab => tab.id === tabId) || tabs[0];

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames(
                { 'is-active': tabId === tab.id },
              )}
            >
              <Link
                to={`../${tab.id}`}
                onClick={() => (
                  tabId !== tab.id
                )}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {
          selectedTab
            ? selectedTab.content
            : 'Please select a tab'
        }
      </div>
    </>
  );
};
