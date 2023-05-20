import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab;
  setSelectedTab: React.Dispatch<React.SetStateAction<Tab | null>>;
};

export const TabLink: React.FC<Props> = ({ tab, setSelectedTab }) => {
  const { id, title } = tab;

  return (
    <Link to={`../${id}`} onClick={() => setSelectedTab(tab)}>
      {title}
    </Link>
  );
};
