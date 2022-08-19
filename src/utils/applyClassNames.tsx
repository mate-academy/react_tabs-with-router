import classNames from 'classnames';

export const applyClassNames = (
  isActive: boolean,
  defaultClassNames: string,
  activeClassName: string,
) => (
  classNames(
    defaultClassNames,
    { [activeClassName]: isActive },
  )
);
