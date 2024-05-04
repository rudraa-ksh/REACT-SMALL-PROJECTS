import React from 'react';

const Comments = ({ comments }) => {
    return (
    <div className="comments">
        <h3>Comments:</h3>
        {comments.map((comment, index) => (
        <p key={index}>{comment}</p>
        ))}
    </div>
    );
};

export default Comments;