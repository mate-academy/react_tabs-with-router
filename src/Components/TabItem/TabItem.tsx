import { Tab } from '../../types/Tab';
import { Link } from 'react-router-dom';

type Props = Tab;
export const TabItem: React.FC<Props> = ({ id, title, isSelected }) => {
  return (
    <li data-cy="Tab" className={isSelected ? 'is-active' : ''}>
      <Link to={`/tabs/${id}`} replace={true}>
        {title}
      </Link>
    </li>
  );
};
