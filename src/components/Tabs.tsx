import { useContext } from 'react';
import { Tabs } from '../App';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
// import classNames from 'classnames';

export const TabsPage = () => {
  const { tabs } = useContext(Tabs);
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { title, id } = tab;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={classNames({ 'is-active': tabId === id })}
              >
                <Link to={`/tabs/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      {!tabs.find(tab => tabId === tab.id) ? (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          {tabs.find(tab => tabId === tab.id)?.content}
        </div>
      )}
    </>
  );
};
