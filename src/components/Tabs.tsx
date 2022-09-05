import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[],
}

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const isActiveTab = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames(
                {
                  'is-active': tabId === tab.id,
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
      <div>
        <div className="block" data-cy="TabContent">
          {isActiveTab || 'Please select a tab'}
        </div>
      </div>
    </>
  );
};
