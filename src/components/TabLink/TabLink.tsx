import { Link } from 'react-router-dom';

type Props = {
  to: string;
  name: string;
};

export const TabLink: React.FC<Props> = ({ to, name }) => (
  <Link
    to={`/tabs/${to}`}
  >
    {name}
  </Link>
);
