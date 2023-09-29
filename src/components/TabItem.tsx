import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab;
};

export const TabItem: React.FC<Props> = ({ tab }) => {
  const { tabId } = useParams();
  const { id, title } = tab;

  return (
    <li
      data-cy="Tab"
      className={classNames({
        'is-active': tabId === id,
      })}
    >
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
