import React, { useState } from 'react';
import Comments from './Comments';

const Article = ({ article, handleLike, handleAddComment }) => {
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState('');

    const toggleComments = () => {
    setShowComments(!showComments);
    };

    const submitComment = () => {
        if (newComment.trim() !== '') {
        handleAddComment(article.id, newComment);
        setNewComment('');
        }
    };

    return (
    <div className="article">
        <h2>{article.title}</h2>
        <p>{article.content}</p>
        <button onClick={() => handleLike(article.id)}>Like</button>
        <button onClick={toggleComments}>
            {showComments ? 'Hide Comments' : 'Show Comments'}
        </button>
        {showComments && <Comments comments={article.comments} />}
        <div>
        <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
        />
        <button onClick={submitComment}>Add Comment</button>
        </div>
    </div>
    );
};

export default Article;