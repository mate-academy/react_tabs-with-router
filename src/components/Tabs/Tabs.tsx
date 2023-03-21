import classNames from 'classnames';
import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
};

export const Tabs:FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams();
  const findContent = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={classNames({ 'is-active': tabId === id })}
              >
                <Link to={`/tabs/${id}`} replace>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {findContent ? findContent.content : 'Please select a tab'}
      </div>
    </>
  );
};
