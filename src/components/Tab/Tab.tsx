import className from 'classnames';
import { Link } from 'react-router-dom';
import { TabType } from '../../types/Tab';

type Props = {
  tab: TabType,
  params?: string | null,
};

export const Tab: React.FC<Props> = ({ tab, params }) => {
  const { id, title } = tab;

  return (
    <li
      data-cy="Tab"
      className={className({ 'is-active': params === id })}
    >
      <Link to={`../${id}`}>
        {title}
      </Link>
    </li>
  );
};
