import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ContentPage } from '../ContentPage/ContentPage';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const [tabContent, setTab] = useState<string>();

  useEffect(() => {
    setTab(tabs.find(t => t.id === tabId)?.content);
  }, [tabId]);

  return (
    <div className="box mt-6">
      <h1 className="title is-2 has-text-centered">Tabs page</h1>

      <div className="tabs is-boxed is-medium">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {(!tabId || !tabs.some(tab => tab.id === tabId))
        ? (
          <div className="box">
            <p className="notification is-danger is-light">
              Please select a tab
            </p>
          </div>
        )
        : (
          <ContentPage tabContent={tabContent} />
        )}
    </div>
  );
};
