import classnames from 'classnames';
import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[]
};

export const Tabs: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  if (tabs.length === 0) {
    return (
      <>
        <h1 className="title">Tabs page</h1>

        <p>No tabs received from server</p>
      </>
    );
  }

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classnames({ 'is-active': tab.id === tabId })}
              key={tab.id}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabId && selectedTab ? (
          <>
            {selectedTab.content}
          </>
        ) : (
          <>
            Please select a tab
          </>
        )}
      </div>
    </>
  );
};
