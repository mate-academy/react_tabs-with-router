import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  id: string;
  title: string;
  onTabPick: (id: string) => void;
};

export const TabLink: FC <Props> = ({ id, title, onTabPick }) => (
  <Link
    to={`../${id}`}
    onClick={() => onTabPick(id)}
  >
    {title}
  </Link>
);
