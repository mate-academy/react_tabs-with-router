import React from 'react';

const CurrentTab = ({ content }) => {

  return (
    <div>
      <div class="ui bottom attached segment active tab">{content}</div>
    </div>
  )
}

export default CurrentTab;
