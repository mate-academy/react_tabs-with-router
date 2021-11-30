import { FC, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../utils/types';

interface Props {
  tabs: Tab[];
}

export const TabsPage: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  const tabContent = useMemo(
    () => tabs.find(tab => tab.id === tabId)?.content,
    [tabId],
  );

  return (
    <div className="container">
      <nav className="navbar">
        {tabs.map(tab => (
          <Link
            to={`/tabs/${tab.id}`}
            className="navbar-item is-tab"
          >
            {tab.title}
          </Link>
        ))}
      </nav>
      {tabContent
        ? (<p>{tabContent}</p>)
        : (<p>Please, select a tab</p>)}
    </div>
  );
};
