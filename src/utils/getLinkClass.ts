import classNames from 'classnames';

export const getLinkClass = ({ isActive }: { isActive: boolean }) => {
  return classNames('navbar-item', { 'is-active': isActive });
};
