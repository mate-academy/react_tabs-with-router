import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import {
  NavLink as Link, useParams,
} from 'react-router-dom';
import './TabsPage.scss';

// import { RouteComponentProps } from 'react-router-dom';

// type TabsPageProps = React.FC<RouteComponentProps<{ tabId: string }>>;
// const TabsPage: TabsPageProps = ({ match }) => {...};

// or

// import { useParams } from 'react-router-dom';

interface User {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: User[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const [isValidTabId, setIsValidTabId] = useState<boolean>(false);

  useEffect(() => {
    setIsValidTabId(tabs.some((tab) => tab.id === tabId));
  }, [tabId]);

  return (
    <div className="TabsPage">
      <h1 className="TabsPage__title">
        Tabs Page
      </h1>
      {!isValidTabId ? (
        <p className="TabsPage__error">
          Please select a tab
        </p>
      ) : (
        <div className="TabsPage__empty-error" />
      )}
      <div className="TabsPage__table">
        {tabs.map((tab: User) => (
          <div className="TabsPage__line" key={tab.id}>
            <Link
              to={`/tabs/${tab.id}`}
              className={classNames(
                'TabsPage__link',
                {
                  'TabsPage__link--active': tabId === tab.id,
                },
              )}
            >
              {tab.title}
            </Link>
            {tabId === tab.id && (
              <div className="TabsPage__cell">
                {tab.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
