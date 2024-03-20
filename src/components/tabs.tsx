import { NavLink, useParams } from 'react-router-dom';
import { tabsList } from '../tabsContent';
import { Tab } from './tab';

export const TabsPage = () => {
  const { tabId } = useParams();
  const tab = tabsList.find(elem => elem.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabsList.map(elem => (
            <li
              key={elem.id}
              className={elem.id === tabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <NavLink to={`${elem.id}`}>{elem.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tab ? <Tab content={tab.content} /> : <h2>Please select a tab</h2>}
      </div>
    </>
  );
};
