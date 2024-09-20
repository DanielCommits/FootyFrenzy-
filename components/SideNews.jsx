import React from "react";
import { Link } from "react-router-dom";
import "./SideNews.css"; 

const SideNews = () => {
  const stories = [
    {
      id: 5,
      title: "Hugo Broos' Bafana Bafana drop on latest Fifa rankings as Nigeria's Super Eagles learn new position after 2025 Afcon qualifiers",
      image:
      "https://assets.goal.com/images/v3/blt33ad0352f798650a/Teboho%20Mokoena%20of%20Bafana%20Bafana-2.jpg?auto=webp&format=pjpg&width=640&quality=60",
      video: null,
      sourceLogo: "https://www.goal.com/img/logo.svg",
      sourceName: "GOAL",
      time: "2 hours ago",
    },
    {
      id: 6,
      title: "Pep Guardiola makes Arsenal title prediction and issues ominous Man City warning",
      video: null,
      image: "https://image-service.onefootball.com/transform?w=280&h=210&dpr=2&image=https%3A%2F%2Fstatic.standard.co.uk%2F2024%2F09%2F19%2F9%2F33%2FSEI222222986.jpeg%3Fwidth%3D1200%26auto%3Dwebp%26quality%3D75",
      sourceLogo: "https://image-service.onefootball.com/transform?w=48&dpr=2&image=https://filebucket.onefootball.com/2023/3/1679050213451-blob",
      sourceName: "Evening Standard",
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
      time: "12 hours ago",
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
