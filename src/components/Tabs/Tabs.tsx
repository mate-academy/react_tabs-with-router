import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import classNames from 'classnames';

interface Props {
  tabs: Tab[];
}

export const Tabs = ({ tabs }: Props) => {
  const { tabId } = useParams<{ tabId?: string }>();

  const selectedTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': tab.id === tabId,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
