import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[],
  selectedTabId: string | undefined
}
export const Tabs: React.FC<Props> = ({ tabs, selectedTabId }) => {
  const isActive = (tab: Tab) => tab.id === selectedTabId;
  const selectedTabContent = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames(
                {
                  'is-active': isActive(tab),
                },
              )}
            >
              <Link
                to={`../${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {
          selectedTabId
            ? (selectedTabContent?.content)
            : 'Please select a tab'
        }
      </div>
    </>
  );
};
