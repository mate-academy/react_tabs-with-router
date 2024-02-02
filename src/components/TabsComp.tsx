import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../api/tabs';

export const TabsComp = () => {
  const { tabId } = useParams();

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(el => (
          <li
            key={el.id}
            data-cy="Tab"
            className={classNames({
              'is-active': el.id === tabId,
            })}
          >
            <Link to={`../${el.id}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
