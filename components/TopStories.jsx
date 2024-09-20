import React from "react";
import "./TopStories.css";
import { MdAccessTimeFilled } from "react-icons/md";

const TopStories = () => {
  const topStories = [
    {
      title:
        "Man City players told to be 'very calm' about 115 FFP charges as club insists 'not one rule has been broken' amid potential threat of Premier League expulsion",
      description:
        "Manchester City bosses have told players to be “very calm” about the club’s 115-charge FFP case, claiming that “not one rule has been broken”.",
      image:
        "https://assets.goal.com/images/v3/bltcd0748b823e57e98/GOAL%20-%20Multiple%20Images%20-%203%20Stacked%20-%20Facebook%20-%202024-08-16T143707.282.png?auto=webp&format=pjpg&width=1080&quality=60",
      link: "/news/1",
      date: "1 hr ago",
      source: "Goal",
      logo: "https://www.goal.com/img/logo.svg",
    },
    {
      title: "Bayern Munich concedes Jamal Musiala contract extension is tough",
      image:
        "https://image-service.onefootball.com/transform?w=840&h=630&dpr=2&image=https%3A%2F%2Ficdn.football-espana.net%2Fwp-content%2Fuploads%2F2024%2F09%2FMusiala-2.jpg",
      link: "/news/2",
      date: "1 hr ago",
      source: "Football Espana",
      logo: "https://image-service.onefootball.com/transform?w=48&dpr=2&image=https://filebucket.onefootball.com/2020/7/1595518112119-blob",
    },
    {
      title:
        "Julian Alvarez's form is expected to soar following his first Atletico Madrid goal, according to Diego Simeone.",
      image:
        "https://image-service.onefootball.com/transform?w=840&h=630&dpr=2&image=https%3A%2F%2Ficdn.football-espana.net%2Fwp-content%2Fuploads%2F2024%2F09%2FJulian-Alvarez.jpeg",
      link: "/news/3",
      date: "1 hr ago",
      source: "Football Espana",
      logo: "https://image-service.onefootball.com/transform?w=48&dpr=2&image=https://filebucket.onefootball.com/2020/7/1595518112119-blob",
    },
    {
      title:
        "🔬 Newcastle completes comeback victory against Wolves as Arsenal wins the NLD",
      image:
        "https://image-service.onefootball.com/transform?w=840&h=630&dpr=2&image=https%3A%2F%2Fwp-images.onefootball.com%2Fwp-content%2Fuploads%2Fsites%2F10%2F2024%2F09%2FTottenham-Hotspur-FC-v-Arsenal-FC-Premier-League-1726420793-1000x694.jpg",
      link: "/news/4",
      date: "14 hrs ago",
      source: "One Football",
      logo: "https://image-service.onefootball.com/transform?w=48&dpr=2&image=https://images.onefootball.com/blogs_logos/circle_onefootball.png",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <a
            href="/news/1"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card mb-5">
              <img
                src={topStories[0].image}
                className="card-img-top"
                alt={topStories[0].title}
              />
              <div className="card-body">
                <h3 className="big-card-title">{topStories[0].title}</h3>
                <p className="card-text description">
                  {topStories[0].description}
                </p>
                <div className="meta-text">
                  <img
                    src={topStories[0].logo}
                    alt="Source Logo"
                    className="source-logo"
                  />
                  <span className="source">{topStories[0].source}</span>
                  <span className="date">
                    <MdAccessTimeFilled size={20} />
                    &nbsp;{topStories[0].date}
                  </span>
                </div>
                <div className="btn btn-custom btn-primary mt-2 float-right">
                  Read More
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="col-md-6">
          {topStories.slice(1).map((story, index) => (
            <div className="card mb-4 d-flex" key={index}>
              <div className="row g-0 align-items-center">
                {" "}
                {/* Ensure alignment */}
                <div className="col-5 col-sm-4">
                  <img
                    src={story.image}
                    className="img-fluid story-image"
                    alt={story.title}
                  />
                </div>
                <div className="col-7 col-sm-8 d-flex flex-column justify-content-center">
                  <div className="card-body">
                    <h5 className="card-title">{story.title}</h5>
                    <div className="meta-text">
                      <img
                        src={story.logo}
                        alt="Source Logo"
                        className="source-logo"
                      />
                      <span className="source">{story.source}</span>
                      <span className="date">
                        {" "}
                        <MdAccessTimeFilled size={13} />
                        &nbsp;{story.date}
                      </span>
                    </div>

                    <a href={story.link} className="stretched-link"></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopStories;
