import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ tabs, selectedId }) => (
  <>
    {tabs.map(article => (
      <span
        className={(article.id === selectedId)
          ? 'active-article'
          : 'content-tab'
        }
      >
        {article.content}
      </span>
    ))}
  </>
);

Article.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  selectedId: PropTypes.number.isRequired,
};

export default Article;
