export const TabsPage = () => {
  const { tabId } = useParams();
  const tab = tabs.find(({ id }) => id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              data-cy="Tab"
              key={id}
              className={classNames({ 'is-active': id === tabId })}
            >
              {tab ? (
                <Link to={`../${id}`} relative="path">
                  {title}
                </Link>
              ) : (
                <Link to={`${id}`} relative="path">
                  {title}
                </Link>
              )}
            </li>
          ))}
          {/*<li data-cy="Tab">*/}
          {/*  <NavLink to="/">Tab 2</NavLink>*/}
          {/*</li>*/}
          {/*<li data-cy="Tab">*/}
          {/*  <NavLink to="/">Tab 3</NavLink>*/}
          {/*</li>*/}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tab ? tab.content : 'Please select a tab'}
      </div>
    </>
  );
};
