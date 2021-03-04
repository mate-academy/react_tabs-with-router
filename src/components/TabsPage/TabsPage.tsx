import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { tabs } from '../../api';
import { Tab } from '../../interfaces';

type TabsPageProps = React.FC<RouteComponentProps<{ tabId: string }>>;

export const TabsPage: TabsPageProps = ({ match }) => {
  const tabId: string | null = match.params.tabId || null;

  const [content, setContent] = useState('');

  useEffect(() => {
    const tab = tabs.find(tab => tab.id === tabId);
    setContent(tab ? tab.content : "Please, select a tab")
  }, [tabId])

  return (
    <>
      <h2 className="subtitle">Tabs page</h2>
      <div>
        <div className="tabs is-boxed is-medium">
          <ul>
            {tabs.map((tab: Tab) => (
              <li
                key={tab.id}
                className={tab.id === tabId ? "is-active" : ''}
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
        <p>{content}</p>
      </div>
    </>
  )
}