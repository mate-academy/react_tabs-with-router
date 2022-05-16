import { NavLink, useParams } from 'react-router-dom';
import './TabsPage.scss';

type Props = {
  tabs: Tab[]
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const content = tabs.find(tab => tabId === tab.id)?.content;

  return (
    <>
      <h1> Tabs Page</h1>
      {tabs.map((tab) => (
        <NavLink key={tab.id} to={tab.id}>
          <button
            type="button"
          >
            {tab.title}
          </button>
        </NavLink>
      ))}
      <div className="content">
        {!content ? 'Please select a tab' : content}
      </div>

    </>
  );
};

export default TabsPage;
