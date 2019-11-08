import React from 'react';

function Content({ tabs, index }) {
  return (
    <div className="ui segment active tab">
      {tabs[index].content}
    </div>
  );
}

export default Content;
