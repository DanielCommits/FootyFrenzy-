import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import newsData from "./newsData.js";
import "./Newspage.css";
import { MdAccessTimeFilled } from "react-icons/md";

const Newspage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fetchedArticle = newsData.find(
        (article) => article.id === parseInt(id)
      );

      if (fetchedArticle) {
        setArticle(fetchedArticle);
      } else {
        navigate("/404");
      }

      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [id, navigate]);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "hcb";
    script.innerHTML = `/*<!--*/
      if(!window.hcb_user){hcb_user={};} 
      (function(){
        var s=document.createElement("script"), 
        l=hcb_user.PAGE || (""+window.location).replace(/'/g,"%27"), 
        h="https://www.htmlcommentbox.com";
        s.setAttribute("type","text/javascript");
        s.setAttribute("src", h+"/jread?page="+encodeURIComponent(l).replace("+","%2B")+"&mod=%241%24wq1rdBcg%241gh94zbht3hy5YlOfec1W%2F"+"&opts=16798&num=10&ts=1726190351882");
        if (typeof s!="undefined") document.getElementsByTagName("head")[0].appendChild(s);
      })(); 
    /*-->*/`;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Add Twitter widgets.js for embedding tweets
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    script.setAttribute("async", "true");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <p className="loading-text">Loading article...</p>
      </div>
    );
  }

  if (!article) {
    return null;
  }

  return (
    <div className="news-article">
      <div className="article-header">
        <div className="article-meta">
          <img src={article.logo} alt="Source Logo" className="source-logo" />
          <span className="source">{article.source}</span>
          <span className="date">
            <MdAccessTimeFilled size={20} />
            &nbsp;{article.date}
          </span>
        </div>
        <h1 className="article-title">{article.title}</h1>
      </div>
      <div className="article-body">
        <img
          src={article.image}
          alt={article.title}
          className="article-image"
        />
        <h1 className="article-subtitle">{article.subtitle}</h1>
        <div className="article-content">
          {article.description.map((item, index) => {
            if (item.type === "paragraph") {
              if (Array.isArray(item.content)) {
                return item.content.map((paragraph, pIndex) => (
                  <p key={`${index}-${pIndex}`}>{paragraph}</p>
                ));
              } else {
                return <p key={index}>{item.content}</p>;
              }
            } else if (item.type === "image") {
              return (
                <img
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  className="description-image"
                />
              );
            } else if (item.type === "video") {
              // Embed the YouTube video using iframe
              return (
                <iframe
                  key={index}
                  width="100%"
                  height="315"
                  src={item.content}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              );
            } else if (item.type === "twitter") {
              // Embed Twitter post using blockquote
              return (
                <blockquote
                  key={index}
                  className="twitter-tweet"
                  data-lang="en"
                  data-theme="dark" 
                >
                  <a href={item.content}></a>
                </blockquote>
              );
            }
            return null;
          })}
        </div>
      </div>

      <div id="HCB_comment_box">
        <a href="http://www.htmlcommentbox.com">Comments</a> are loading...
      </div>
    </div>
  );
};

export default Newspage;
