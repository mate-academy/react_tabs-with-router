import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../tabs/Tabs';

const TabList = (props) => {
  const { match, tabs } = props;

  return (
    <>
      <Tabs match={match} tabs={tabs} />
    </>
  );
};

TabList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tabId: PropTypes.string,
    }).isRequired,
  }).isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};

export default TabList;
