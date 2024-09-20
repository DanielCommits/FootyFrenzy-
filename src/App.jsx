import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TopStories from "/components/TopStories.jsx";
import SideNews from "/components/SideNews.jsx";
import FeaturedStories from "/components/FeaturedStories.jsx";
import Newspage from "/pages/Newspage.jsx";
import Contact from "/components/Contact.jsx";
import Header from "/components/Header.jsx";
import LiveScores from "/components/LiveScores.jsx";
import Footer from "/components/Footer";
import ScrollToTop from "/components/ScrollToTop.jsx";
import RandomStats from "/components/RandomStats";
import "./App.css";

// Moved this inside a component that is a child of the Router
const ConditionalRender = () => {
  const location = useLocation(); // Hook inside a Router context
  const isHomePage = location.pathname === "/"; // Check if the current path is home

  return (
    <>
      {isHomePage && <SideNews />}
      {isHomePage && <FeaturedStories />}
      {isHomePage && <RandomStats />}
    </>
  );
};

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/livescore" element={<LiveScores />} />
          <Route path="/" element={<TopStories />} />
          <Route path="/news/:id" element={<Newspage />} />
        </Routes>
        <ConditionalRender /> {/* Conditionally render the components */}
        <Footer />
        <ScrollToTop />
      </Router>
    </div>
  );
};

export default App;
