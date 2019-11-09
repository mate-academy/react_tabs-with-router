import React from 'react';

function SingleContent({ onTabSelected, content, active }) {
  return (
    <div onClick={onTabSelected}
         className={active ? 'ui bottom attached active tab segment' : 'ui bottom attached tab segment'}>
      {content}
    </div>
  );
}

export default SingleContent;
