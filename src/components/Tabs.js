import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const state = {
  tabs: [
    {
      id: 'tab-1',
      title: 'HTML',
      content: 'Hypertext Markup Language (HTML) is the '
      + 'standard markup language '
      + 'for documents designed to be displayed in a web browser. '
      + 'It can be assisted '
      + 'by technologies such as Cascading Style Sheets (CSS) '
      + 'and scripting languages'
      + ' such as JavaScript.',
    },
    {
      id: 'tab-2',
      title: 'JavaScript',
      content: 'JavaScript often abbreviated as JS,'
        + ' is a high-level, interpreted programming '
        + 'language that conforms to the ECMAScript '
        + 'specification. JavaScript has curly-bracket'
        + ' syntax, dynamic typing, prototype-based '
        + 'object-orientation, and first-class functions.',
    },
    {
      id: 'tab-3',
      title: 'React',
      content: 'React (also known as React.js or ReactJS)'
        + ' is a JavaScript library for building user '
        + 'interfaces. It is maintained by Facebook and a '
        + 'community of individual developers and companies.',
    },
  ],
};

function Tabs({ match }) {
  return (
    <Router>
      <div>
        <h2>Explanation from wiki</h2>
        <ul className="nav nav-tabs">
          {state.tabs.map(tab => (
            <li className="nav-item" key={tab.id}>
              <NavLink
                className="nav-link"
                to={`${match.url}/${tab.id}`}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <Route path={`${match.path}/:id`} component={Tab} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a language.</h3>}
        />
      </div>
    </Router>
  );
}

function Tab({ match }) {
  return (
    <div>
      <h3>{state.tabs.find(tab => tab.id === match.params.id).content}</h3>
    </div>
  );
}

Tabs.propTypes = {
  match: PropTypes.arrayOf(PropTypes.object).isRequired,
};
Tab.propTypes = {
  match: PropTypes.arrayOf(PropTypes.array).isRequired,
};
export default Tabs;
