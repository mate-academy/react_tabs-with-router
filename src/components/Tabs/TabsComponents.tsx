import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
};

export const TabsComponent: React.FC<Props> = ({
  tabs,
  selectedTabId,
}) => {
  const [selectedTabContent, setSelectedTabContent]
    = useState<string>(' Please select a tab');

  useEffect(() => {
    const selectedTab = tabs.find(tab => tab.id === `${selectedTabId}`);

    if (selectedTab) {
      setSelectedTabContent(selectedTab.content);
    } else {
      setSelectedTabContent(' Please select a tab');
    }
  }, [tabs, selectedTabId]);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === `tab-${selectedTabId}` ? 'is-active' : ''}
              data-cy="Tab"
            >
              <Link
                to={`../${tab.id}`}
                relative="path"
                data-cy="TabLink"
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabContent}
      </div>
    </div>
  );
};
