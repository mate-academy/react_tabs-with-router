import cn from 'classnames';

export const getLinkClass = (
  { isActive }: { isActive: boolean },
) => cn('navbar-item', { 'is-active': isActive });
