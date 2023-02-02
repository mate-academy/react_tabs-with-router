import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const activeTabId = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={classNames(
                  { 'is-active': tabId === id },
                )}
              >
                <Link to={`../${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabId && +tabId.slice(4) <= tabs.length
          ? `${activeTabId?.content}`
          : 'Please select a tab'}
      </div>
    </>
  );
};
