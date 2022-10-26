import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[],
}
export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const isActive = (tab: Tab) => tab.id === tabId;
  const selectedTabContent = tabs.find(tab => tab.id === tabId);

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
          tabId
            ? (selectedTabContent?.content)
            : 'Please select a tab'
        }
      </div>
    </>
  );
};
