import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const TabsPage = (props) => {
  const { path } = props.match;
  const panes = [
    {
      menuItem: {
        as: NavLink,
        content: 'Tab 1',
        to: `${path}/1`,
        key: 'tab1',
      },
      render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
    },
    {
      menuItem: {
        as: NavLink,
        content: 'Tab 2',
        to: `${path}/2`,
        key: 'tab2',
      },
      render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
    },
    {
      menuItem: {
        as: NavLink,
        content: 'Tab 3',
        to: `${path}/3`,
        key: 'tab3',
      },
      render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
    },
  ];

  return (
    <div>
      <h1>Tabs page</h1>

      <Tab panes={panes} />
    </div>
  );
};

TabsPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default TabsPage;
