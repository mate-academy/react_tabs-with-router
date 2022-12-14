import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab;
};

export const TabLink: React.FC<Props> = ({ tab }) => {
  return (
    <Link to={`../${tab.id}`}>
      {tab.title}
    </Link>
  );
};
