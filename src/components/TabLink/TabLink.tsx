import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab;
};

export const TabLink: React.FC<Props> = ({ tab }) => {
  const { id, title } = tab;

  return (
    <Link
      to={`../${id}`}
    >
      {title}
    </Link>
  );
};
