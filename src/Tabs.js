import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import TabsContent from './TabsContent';

const someText1 = `Dozens of protesters crashed New York Gov.
 Andrew M. Cuomo’s birthday
 fundraiser Wednesday night, and they brought cake.
 Dozens of protesters crashed New York Gov. Andrew M.
 Cuomo’s birthdayfundraiser Wednesday night, and they brought cake.`;
const someText2 = `Armed with signs, birthday hats, party horns
 and a sheet cake with#MakeBillionairesPay written in curly
 red icing, members of several advocacy groups assembled outside
 the Essex Hotel in Manhattan to pressure the Democratic governor
 to embrace more stringent policies to combat climate change,
 and to implement a tax on billionaires to help pay for public services`;
const someText3 = `“We wanted to have a celebratory element
 to it,” said Miles Goodrich of the Sunrise Movement,
 one of the groups that organized the protest.
 “We wanted to have a celebratory element to it,”
 said Miles Goodrich of the Sunrise Movement,
 one of the groups that organized the protest.`;

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: someText1,
  },
  {
    id: 'tab-2', title: 'Tab 2', content: someText2,
  },
  {
    id: 'tab-3', title: 'Tab 3', content: someText3,
  },
];
const Tabs = ({ match }) => (
  <div className="menu">
    <ul className="tabs">
      {tabs.map(item => (
        <li className="tabs_link">
          <NavLink to={`${match.path}/${item.id}`} exact>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
    <Switch>
      {tabs.map(item => (
        <Route
          path={`${match.path}/${item.id}`}
          render={() => (
            <TabsContent currentTab={item} />
          )}
        />
      ))}
    </Switch>
  </div>
);

Tabs.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tabs;
