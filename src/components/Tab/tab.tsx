import { FC } from 'react';
import { Link } from 'react-router-dom';
import { TabType } from '../../types/TabType';

type Props = {
  tab: TabType,
};

export const Tab: FC<Props> = ({ tab }) => (
  <Link to={`../${tab.id}`}>
    { tab.title }
  </Link>
);
