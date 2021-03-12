import React from 'react';

interface Props {
    content: string;
  }

export const Content: React.FC<Props> = ({ content}) => (
    <div className="content1">
        {content}
    </div>
)
