import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab,
};

export const TabItem: React.FC<Props> = ({ tab }) => {
  const {
    title,
    id,
  } = tab;

  return (
    <Link
      to={`/tabs/${id}`}
    >
      {title}
    </Link>
  );
};
