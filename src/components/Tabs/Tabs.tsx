import React, { useState, useMemo } from "react";
import { NavLink, useParams } from 'react-router-dom';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const [selectedTab, setSelectedtab] = useState<Tab | null>(null);
  const { tabId } = useParams();

  const isCorrectTab = useMemo(() => {
    const selectedPage = tabs.find(tab => tab.id === tabId);

    if (selectedPage) {
      setSelectedtab(selectedPage);

      return true;
    }

    return false;
  }, [tabId, selectedTab]);

  return (
    <div>
      {!isCorrectTab && (
        <p>Please select tab</p>)}
      <ul>
        {tabs.map(tab => {
          return (
            <li key={tab.id}>
              <NavLink
                to={tab.id}
                onClick={() => {
                  setSelectedtab(tab);
                }}
              >
                {tab.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      {
        isCorrectTab && (
          <p className="Tabs__tab-content">
            {selectedTab?.content}
          </p>
        )
      }
    </div>
  );
};
