import React from 'react';

export const Content: React.FC<{content:string}> = ({ content}) => (
        <div className="content1">
            {content}
        </div>
        )