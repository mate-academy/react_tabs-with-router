import React, { useState } from 'react';

export const Tabs = ({ tabs }) => {

  return (
    <div className="container">
      <div className="tab">
        {tabs.map((tab => (
          <button
            key={tab.id}
            type="button"
            className="tab__button"
            value={tab.content}
          >
            {tab.title}
          </button>
        )))}
      </div>
    </div>
  );
};