import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab;
}
export const TabItem: React.FC<Props> = ({ tab }) => {
  const {
    id,
    title,
  } = tab;

  return (
    <li data-cy="Tab" className="is-active">
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
