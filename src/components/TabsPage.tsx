import { NavLink, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import './TabsPage.scss';

type Props = {
  tabs: Tab[];
};

const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <div>
      <ul className="tabs">
        {tabs.map(tab => (
          <NavLink
            key={tab.id}
            to={`/tabs/${tab.id}`}
            className={({ isActive }) => `tabs__tab ${(isActive && 'tabs__tab--active')}`}
          >
            {tab.title}
          </NavLink>
        ))}
      </ul>
      <p
        className="content"
      >
        {tabs.find(tab => tab.id === tabId)?.content
        || 'Please select a tab'}
      </p>
    </div>
  );
};

export default Tabs;
