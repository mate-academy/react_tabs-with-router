import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import Tab from './Tab';

const Tabs = ({ tabs, hendleClickShowContent, currentContent }) => (
  <section>
    <BrowserRouter>
      <div className="tabButtons">
        {tabs.map(tab => (
          <div key={tab.id}>
            <Link
              exact
              to={`/tabs/tab-${tab.id}`}
              className="Button"
              onClick={() => hendleClickShowContent(tab.id)}
            >
              {tab.title}
            </Link>
          </div>
        ))}
      </div>
      <Route
        exact
        path={`/tabs/tab-${currentContent.id}`}
        render={() => (
          <Tab currentContent={currentContent} />
        )}
      />
    </BrowserRouter>

  </section>
);

Tabs.propTypes = {
  tabs: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  hendleClickShowContent: PropTypes.func.isRequired,
  currentContent: PropTypes.string.isRequired,
};

export default Tabs;
