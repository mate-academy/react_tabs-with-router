import { NavLink, useParams } from 'react-router-dom';
import './TabPage.scss';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="Tab__section">
      <h2 className="title is-2">
        {!tabId || !activeTab ? 'Please select a tab' : ''}
      </h2>
      <ul className="Tab__list">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <NavLink
              to={`/tabs/${tab.id}`}
              className="button"
              activeClassName="is-active"
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>

      {activeTab && (
        <p className="Tab__content">
          {activeTab.content}
        </p>
      )}
    </div>
  );
};
