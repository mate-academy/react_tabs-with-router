import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'semantic-ui-react';

export const Tabs = ({ tabs }) => (
  <>
    {tabs.map(tab => (
      <Tab panes={tab.title} renderActiveOnly={false} />
    ))}
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
