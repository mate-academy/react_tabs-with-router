import cn from 'classnames';
type IsActiveType = {
  isActive: boolean;
};

export const getActiveColor = ({ isActive }: IsActiveType) => {
  return cn('navbar-item', { 'is-active': isActive });
};
