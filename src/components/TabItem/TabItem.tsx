import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab;
};

export const TabItem: React.FC<Props> = ({ tab }) => {
  const { id, title } = tab;
  const { tabId } = useParams();

  return (
    <li data-cy="Tab" className={classNames({ 'is-active': tabId === id })}>
      <Link to={id}>{title}</Link>
    </li>
  );
};
