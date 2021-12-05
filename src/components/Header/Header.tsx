import { MainNavigation } from '../MainNavigation';
import { Wrapper } from '../Wrapper';

import './Header.scss';

export const Header = () => {
  return (
    <header className="Header">
      <Wrapper>
        <MainNavigation className="Header__main-navigation" />
      </Wrapper>
    </header>
  );
};
