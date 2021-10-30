import { NavLink, useParams } from 'react-router-dom';
import './TabsPage.scss';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div
        className="tabs-container"
      >
        {tabs.map(tab => (
          <NavLink
            key={tab.id}
            to={`/tabs/${tab.id}`}
            className="tab"
            activeClassName="is-active"
          >
            {`${tab.title}`}
          </NavLink>
        ))}
      </div>
      {tabId
        ? <p className="content">{tabs.find(tab => tab.id === tabId)?.content}</p>
        : <p>Please select a tab</p>}
    </>
  );
};
