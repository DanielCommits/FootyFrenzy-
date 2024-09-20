import React from "react";
import { Link } from "react-router-dom";
import "./SideNews.css"; 

const SideNews = () => {
  const stories = [
    {
      id: 5,
      title: "Erik ten Hag responds to Cristiano Ronaldo's Man Utd comments",
      image:
      "https://assets.goal.com/images/v3/blt1df618eef7db85e7/GOAL%20-%20Multiple%20Images%20-%203%20Stacked%20-%20Facebook(146).png?auto=webp&format=pjpg&width=640&quality=60",
      video: null,
      sourceLogo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/One_Football_Logo_2021.png",
      sourceName: "OneFootball",
      time: "4 hours ago",
    },
    {
      id: 6,
      title: "Arteta signs new Arsenal contract with eyes set on major trophies",
      image: null,
      video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      sourceLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Arsenal_FC_logo.svg",
      sourceName: "Arsenal FC",
      time: "3 hours ago",
    },
    {
      id: 7,
      title: "🗣️ Leicester confront PL for answers after 'false image' VAR controversy",
      image:
      "https://image-service.onefootball.com/transform?w=336&h=252&dpr=2&image=https%3A%2F%2Fwp-images.onefootball.com%2Fwp-content%2Fuploads%2Fsites%2F10%2F2024%2F09%2FFulham-FC-v-Leicester-City-FC-Premier-League-1726754527-1000x667.jpg",
      video: null,
      sourceLogo: "https://image-service.onefootball.com/transform?w=48&dpr=2&image=https://images.onefootball.com/blogs_logos/circle_onefootball.png",
      sourceName: "One Football",
      time: "2 hours ago",
    },
    {
      id: 8,
      title: "Acerbi jokes over shirt request to Haaland: ‘He didn’t give it to me’",
      video: null,
      image: "https://image-service.onefootball.com/transform?w=336&h=252&dpr=2&image=https%3A%2F%2Ficdn.football-italia.net%2Fwp-content%2Fuploads%2F2024%2F09%2FFrancesco-Acerbi-Erling-Haaland-Manchester-City-Inter.jpg",
      sourceLogo: "https://image-service.onefootball.com/transform?w=48&dpr=2&image=https://filebucket.onefootball.com/2024/1/1705342796853-blob",
      sourceName: "Football Italia",
      time: "1 day ago",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {stories.map((story) => (
          <div key={story.id} className="col-lg-3 col-md-6 mb-4">
            <div className="news-card">
              <Link to={`/news/${story.id}`}>
                <div className="thumbnail">
                  {story.video ? (
                    <video src={story.video} alt={story.title} controls />
                  ) : (
                    <img src={story.image} alt={story.title} />
                  )}
                </div>
                <h3 className="news-title">{story.title}</h3>
              </Link>
              <div className="news-meta">
                <img src={story.sourceLogo} alt={story.sourceName} className="source-logo" />
                <span>{story.sourceName}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="news-time">{story.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNews;
