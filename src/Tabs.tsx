import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Tab } from './types/Tab';

interface TabsProps {
  tabs: Tab[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState<string>();

  const onTabClick = (tabId: string) => {
    setSelectedTab(tabId);
  };

  const { tabId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (tabId && !tabs.some((tab) => tab.id === tabId)) {
      navigate('/tabs/');
    }
  }, [tabId, tabs, navigate]);

  useEffect(() => {
    setSelectedTab(tabId);
  }, [tabId]);

  const tabContent = selectedTab
    ? tabs.find((tab) => tab.id === selectedTab)?.content
    : 'Please select a tab';

  return (
    <>
      <div className="tabs is-boxed">

        <ul>
          {tabs.map((tab) => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames('', {
                'is-active': tab.id === selectedTab,
              })}
            >
              <Link
                to={selectedTab === tab.id ? '#/' : `/tabs/${tab.id}`} // issue was with relative links instead of absolute ones
                onClick={() => onTabClick(tab.id)}
              >
                {tab.title}
              </Link>
            </li>

          ))}
        </ul>
      </div>

      {selectedTab
        ? (
          <div className="block" data-cy="TabContent">
            {tabContent}
          </div>
        )
        : (
          <div className="block" data-cy="TabContent">
            {tabContent}
          </div>
        )}

    </>

  );
};
