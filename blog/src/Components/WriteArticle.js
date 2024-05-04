import React, { useState } from 'react';

const WriteArticle = ({ addNewArticle }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () => {
    if (title.trim() !== '' && content.trim() !== '') {
        const newArticle = {
        id: Math.random().toString(36).substr(2, 9), // Generate random ID
        title,
        content,
        likes: 0,
        comments: [],
        };
        addNewArticle(newArticle);
        setTitle('');
        setContent('');
    }
    };

    return (
    <div className="write-article" style = {{display: "block"}}>
        <h2>Write a New Article</h2>
        <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button onClick={handleSubmit}>Submit</button>
    </div>
    );
};

export default WriteArticle;