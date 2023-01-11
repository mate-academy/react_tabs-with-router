import classNames from 'classnames';

interface NavLinkObj {
  isActive: boolean,
}

export function makeActive(objectWithProperties: NavLinkObj) {
  const { isActive } = objectWithProperties;

  return classNames('navbar-item', { 'is-active': isActive });
}
