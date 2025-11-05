import { Link } from "react-router-dom";

export const TabsContent = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title">Tabs page</h1>
        </div>
      </section>
      <div className="container">
        <div className="tabs is-boxed">
          <ul>
            <li data-cy="Tab" className="is-active">
              <Link to="/tabs/tab-1">Tab 1</Link>
            </li>
            <li data-cy="Tab">
              <Link to="/tabs/tab-2">Tab 2</Link>
            </li>
            <li data-cy="Tab">
              <Link to="/tabs/tab-3">Tab 3</Link>
            </li>
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      </div>
    </>
  );
};