import cn from 'classnames';

export const Home = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className={cn('navbar is-light is-fixed-top is-mobile has-shadow',
          'has-navbar-fixed-top')}
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item is-active">Home</a>
            <a href="/tabs" className="navbar-item">Tabs</a>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <h1 className="title">Home page</h1>
          <h1 className="title">Tabs page</h1>
          <h1 className="title">Page not found</h1>

          <div className="tabs is-boxed">
            <ul>
              <li data-cy="Tab" className="is-active">
                <a href="#/">Tab 1</a>
              </li>
              <li data-cy="Tab">
                <a href="#/">Tab 2</a>
              </li>
              <li data-cy="Tab">
                <a href="#/">Tab 3</a>
              </li>
            </ul>
          </div>

          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        </div>
      </div>
    </>
  );
};
