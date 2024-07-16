import classNames from 'classnames';

export const getClassForLink = ({
  isActive,
}: {
  isActive: boolean;
}): string | undefined => {
  return classNames('navbar-item', { 'is-active': isActive });
};
