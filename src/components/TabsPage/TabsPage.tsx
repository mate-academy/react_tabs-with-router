import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './TabsPage.scss';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
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
        {tabs.map((tab: Tab) => (
          <div className="TabsPage__line" key={tab.id}>
            <NavLink
              to={`/tabs/${tab.id}`}
              className={classNames(
                'TabsPage__link',
                {
                  'TabsPage__link--active': tabId === tab.id,
                },
              )}
            >
              {tab.title}
            </NavLink>
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
