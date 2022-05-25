import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './Navigation.scss';

export const Navigation = React.memo(() => {
  const [selectedLink, setSelectedLink] = useState('');

  return (
    <div className="navigation">
      <NavLink
        to="/"
        className={classNames(
          'navigation__link',
          { active: selectedLink === 'homepage' },
        )}
        onClick={() => setSelectedLink('homepage')}
      >
        Home
      </NavLink>

      <NavLink
        to="/cards/info"
        className={classNames(
          'navigation__link',
          { active: selectedLink === 'cards' },
        )}
        onClick={() => setSelectedLink('cards')}
      >
        Tabs
      </NavLink>
    </div>
  );
});
