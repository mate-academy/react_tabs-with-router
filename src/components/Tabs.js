import React from 'react';

const Tabs = ({ tabs, match }) => {
  if (match.params.id !== undefined) {
    return (
      <div className="ui bottom attached segment active tab">
        <p>
          {tabs.find((tab) => {
            if (tab.id === match.params.id) {
              return tab;
            }
          }).content}
        </p>
      </div>
    );
  }

  return (
    <div className="ui bottom attached segment active tab" />
  );
};

export default Tabs;
