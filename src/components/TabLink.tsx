import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab,
};

export const TabLink: React.FC<Props> = ({ tab }) => {
  const { id, title } = tab;

  const { tabId } = useParams();

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
