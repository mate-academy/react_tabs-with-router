import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';
import { tabs } from '../../utils';

export const TabsPage: FC = () => {
  const { tabId } = useParams();

  const findContent = (): Tab | undefined => (
    tabs.find(tab => tab.id === tabId)
  );

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ title, id }) => (
            <li
              key={id}
              data-cy="Tab"
              className={classNames({ 'is-active': tabId === id })}
            >
              <Link to={`/tabs/${id}`} replace>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {findContent() ? (
          findContent()?.content
        ) : (
          'Please select a tab'
        )}
      </div>
    </>
  );
};
