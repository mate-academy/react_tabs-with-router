// import { event } from 'cypress/types/jquery';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
// import { event } from 'cypress/types/jquery';
// import { Tab } from '../types/Tab';

// interface Props {
//   tabs: Tab[];
//   selectedTabId: string;
// }

export const Navbar: React.FC = () => {
  // const [activeChapter, setActiveChapter] = useState('Home');
  const activePath = useLocation();
  const [isWrongPath, setIsWrongPath] = useState(false);
  // const { wha } = useParams();

  useEffect(() => {
    if (activePath.pathname === '/'
      || activePath.pathname.includes('/tabs')) {
      setIsWrongPath(false);
    } else {
      setIsWrongPath(true);
    }
  }, [activePath.pathname]);

  // console.log(wha);

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={classNames('navbar-item', {
              'is-active': activePath.pathname === '/' && !isWrongPath,
            })}
            // onClick={(event) => (
            //   setActiveChapter(event.currentTarget.innerText)
            // )}
          >
            Home
          </Link>
          <Link
            to="/tabs"
            className={classNames('navbar-item', {
              'is-active': (
                activePath.pathname.includes('/tabs')
              ) && !isWrongPath,
            })}
            // onClick={(event) => (
            //   setActiveChapter(event.currentTarget.innerText)
            // )}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};
