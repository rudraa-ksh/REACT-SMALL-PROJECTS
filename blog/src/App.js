import './App.css';
import React, { useState } from 'react';
import Articles from './Components/Articles';
import WriteArticle from './Components/WriteArticle';

const App = () => {
  const [articles, setArticles] = useState([]);

  const handleLike = (articleId) => {
    const updatedArticles = articles.map((article) => {
      if (article.id === articleId) {
        return { ...article, likes: article.likes + 1 };
      }
      return article;
    });
    setArticles(updatedArticles);
  };

  const handleAddComment = (articleId, comment) => {
    const updatedArticles = articles.map((article) => {
      if (article.id === articleId) {
        return { ...article, comments: [...article.comments, comment] };
      }
      return article;
    });
    setArticles(updatedArticles);
  };

  const addNewArticle = (newArticle) => {
    setArticles([...articles, newArticle]);
  };

  return (
    <div className="App">
      <h1>Create Blog for Free</h1>
      <h1>My Blogs!</h1>
      <WriteArticle addNewArticle={addNewArticle} />
      <Articles
        articles={articles}
        handleLike={handleLike}
        handleAddComment={handleAddComment}
      />
    </div>
  );
};

export default App;
