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
      source: "GOAL",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEXwcFrxcFrzclvla1bIXUvCWklDHxkiDw0nEg4+HRcfDgxlLyaiTDyrUD+VRTjobFfrblh1NiuJQDOYRzneZ1PSYk9vMyleKyNUJyAwFhKMQTXUY0+xUkI2GRQAAAB+Oi8WDAqYdywaAAAArElEQVR4AeWQAwLEMBAAwypGzf9/8q72Dzpx1gu+A0SvwFmGCX2B4EmKSBBGD8KYoElIE8ZvCM4SughDqcCI1vMad2SsCzeh0wgRP64UaQ+8R5nhJyGIgpyzoqzqpBFGI3i2TNvUMIN9KTvreg31Lhykxq0sWMZlELCc5QJrOcxCWFuqUVM5Qquq4b6RtveA2hqCCTUlqDVCY9IaaaXweKqtf/MG5zXvcPv8CH97RgrPkt+UTAAAAABJRU5ErkJggg==",
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
        "David Raya magic rescues Arsenal but Champions League draw raises further questions",
      image:
        "https://image-service.onefootball.com/transform?w=336&h=252&dpr=2&image=https%3A%2F%2Fstatic.independent.co.uk%2F2024%2F09%2F19%2F22%2F2024-09-19T205724Z_29786767_UP1EK9J1M7MRM_RTRMADP_3_SOCCER-CHAMPIONS-ATA-ARS-REPORT.jpg%3Fquality%3D75%26width%3D1200%26auto%3Dwebp",
      link: "/news/3",
      date: "1 hr ago",
      source: "The Independent",
      logo: "https://image-service.onefootball.com/transform?w=48&dpr=2&image=https://filebucket.onefootball.com/2022/6/1656507538717-blob",
    },
    {
      title:
        "Joshua Zirkzee already 'looks a bit like' Zlatan Ibrahimovic but needs Hojlund.",
      image:
        "https://assets.goal.com/images/v3/blt0d3ea0afab8391e0/Zirkzee%20needs%20Hojlund%20to%20reach%20full%20potential.jpg?auto=webp&format=pjpg&width=828&quality=60",
      link: "/news/4",
      date: "1 hr ago",
      source: "GOAL",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEXwcFrxcFrzclvla1bIXUvCWklDHxkiDw0nEg4+HRcfDgxlLyaiTDyrUD+VRTjobFfrblh1NiuJQDOYRzneZ1PSYk9vMyleKyNUJyAwFhKMQTXUY0+xUkI2GRQAAAB+Oi8WDAqYdywaAAAArElEQVR4AeWQAwLEMBAAwypGzf9/8q72Dzpx1gu+A0SvwFmGCX2B4EmKSBBGD8KYoElIE8ZvCM4SughDqcCI1vMad2SsCzeh0wgRP64UaQ+8R5nhJyGIgpyzoqzqpBFGI3i2TNvUMIN9KTvreg31Lhykxq0sWMZlELCc5QJrOcxCWFuqUVM5Qquq4b6RtveA2hqCCTUlqDVCY9IaaaXweKqtf/MG5zXvcPv8CH97RgrPkt+UTAAAAABJRU5ErkJggg==",
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
