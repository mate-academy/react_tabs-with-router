import classNames from 'classnames';

export const setActiveLink = (
  defaultClass: string,
  activeClass: string,
) => ({ isActive } : { isActive: boolean }) => classNames(
  defaultClass,
  {
    [activeClass]: isActive,
  },
);
