import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  id: string;
  title: string;
};

export const TabLink: FC <Props> = ({ id, title }) => (
  <Link
    to={`../${id}`}
  >
    {title}
  </Link>
);
