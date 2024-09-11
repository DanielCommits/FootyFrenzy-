import React from "react";
import { useParams } from "react-router-dom";
import newsData from "./newsData.js"; // Adjust the path as necessary
import "./TransferDeal.css";

const TransferDeal = () => {
  const { id } = useParams();
  const article = newsData.find((article) => article.id === parseInt(id));

  if (!article) return <p>Article not found</p>;

  return (
    <div className="news-article">
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} className="news-image" />
      <p>{article.description}</p>
      <small>
        Date: {article.date} • Time: {article.time}
      </small>
    </div>
  );
};

export default TransferDeal;
