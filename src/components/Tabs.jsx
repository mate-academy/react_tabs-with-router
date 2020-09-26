import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

export const Tabs = ({ tabs }) => {
  const [index, setIndex] = useState(null);

  return (
    <div className="tabs">
      {
        tabs.map((item, counter) => (
          <button
            type="button"
            onClick={() => setIndex(counter)}
            key={item.id}
          >
            <Tab {...item} />
          </button>
        ))
      }
      <div className="text">
        {typeof index !== 'number' && `Choose the tab`}
        {typeof index === 'number' && tabs[index].content}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
