import { Link } from 'react-router-dom';

type TabsContentProps = {
  children?: React.ReactNode;
};

type TabLinksProps = {
  tabs?: { id: string; title: string; content: string }[];
  activeTabId?: string;
};

export const TabLinks: React.FC<TabLinksProps> = ({ tabs, activeTabId }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs?.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={tab.id === activeTabId ? 'is-active' : ''}
          >
            <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const TabsContent: React.FC<TabsContentProps> = ({ children }) => {
  return (
    <div className="block" data-cy="TabContent">
      {children}
    </div>
  );
};
