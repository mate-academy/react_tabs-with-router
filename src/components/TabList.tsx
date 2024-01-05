import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { tabContext } from '../context';

export const TabList = () => {
  const tabs = useContext(tabContext);
  const { tabId } = useParams();

  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={classNames({ 'is-active': tabId === tab.id })}
        >
          <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
        </li>
      ))}
    </ul>
  );
};
