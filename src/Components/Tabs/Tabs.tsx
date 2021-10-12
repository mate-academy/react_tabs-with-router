import { NavLink, useParams } from 'react-router-dom';
import './Tabs.scss';

type Props = {
  tabs: Tabs[],
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs } = props;
  const { tabId } = useParams<{ tabId: string }>();
  const tabContent = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <>
      <h1 className="title">Tabs Page</h1>
      <div className="container">
        {tabs.map(tab => (
          <NavLink
            key={tab.id}
            to={`/tabs/${tab.id}`}
            className="link"
            activeClassName="active"
          >
            {tab.title}
          </NavLink>
        ))}
      </div>
      <div className="content">
        {tabContent || ('Please select a tab')}
      </div>
    </>
  );
};
