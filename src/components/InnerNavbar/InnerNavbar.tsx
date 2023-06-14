import { NavLink } from 'react-router-dom';

import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab;
  isTabClicked: (elem: string) => void;
  isActive: string;
}

export const InnerNavbar: React.FC<Props> = (
  { tab, isTabClicked, isActive },
) => {
  const { id, title } = tab;

  const handleClick = (value:string) => {
    isTabClicked(value);
  };

  return (
    <li data-cy="Tab" className={isActive === id ? 'is-active' : ''}>
      <NavLink to={`/TabsPage/${id}`} onClick={() => handleClick(id)}>

        {title}
      </NavLink>
    </li>
  );
};
