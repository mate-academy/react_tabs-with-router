import { Link, useParams } from 'react-router-dom';
import { tabs } from '../Const/Tabs_Const';

export const TabsPage = ({ TabsList = tabs }) => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {TabsList.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={tabId === String(tab.id) ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {TabsList.find(tab => String(tab.id) === tabId)?.content ||
          'Please select a tab'}
      </div>
    </>
  );
};
