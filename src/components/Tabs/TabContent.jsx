import React from 'react';
import { withRouter } from 'react-router-dom';

export const TabContent = withRouter(
  ({ match, tabs }) => {
    const { tabId } = match.params;
    const validationId = tabs.some(tab => tab.id === tabId);

    if (!tabId || !validationId) {
      return (
        <p className="tabs__content">
          Please select a tab
        </p>
      );
    }

    const { content } = tabs.find(tab => tab.id === tabId);

    return (
      <p className="tabs__content">
        {content}
      </p>
    );
  },
);
