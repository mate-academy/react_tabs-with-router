import React from 'react';

const Tabs = ({ tabs, match: { params: { id } } }) => {
  if (id !== undefined) {
    return (
      <div className="ui bottom attached segment active tab">
        <p>
          {tabs.find(tab => (tab.id === id).content)}
        </p>
      </div>
    );
  }

  return (
    <div className="ui bottom attached segment active tab" />
  );
};

export default Tabs;
