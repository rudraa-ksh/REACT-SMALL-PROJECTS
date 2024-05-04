import React from 'react';
import Article from './Article';

const Articles = ({ articles, handleLike, handleAddComment }) => {
    return (
    <div className="articles">
        {articles.map((article) => (
        <Article
            key={article.id}
            article={article}
            handleLike={handleLike}
            handleAddComment={handleAddComment}
        />
        ))}
    </div>
    );
};

export default Articles;
