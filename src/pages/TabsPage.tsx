import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../store/tabs';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  const selectedTabId = tabId;
  const tabContent = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs?.map(tab => {
            const { id, title } = tab;

            return (
              <li
                data-cy="Tab"
                className={classNames({ 'is-active': id === selectedTabId })}
                key={id}
              >
                <Link to={`../${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent || 'Please select a tab'}
      </div>
    </>
  );
};
