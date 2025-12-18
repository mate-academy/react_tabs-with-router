import { Link } from 'react-router-dom';

interface Props {
  tabs: { id: string; title: string; content: string }[];
  activeTabId: string;
}

export const Tabs: React.FC<Props> = ({ tabs, activeTabId }) => {

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={activeTabId === tab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <Link to={`/tabs/${tab.id}`}> {tab.title} </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
