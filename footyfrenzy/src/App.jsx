import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TopStories from "/components/TopStories.jsx";
import TransferDeal from "/pages/TransferDeal.jsx";
import Contact from "/components/Contact.jsx";
import Header from "/components/Header.jsx";
import LiveScores from "/components/LiveScores.jsx";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/livescore" element={<LiveScores />} />
          <Route path="/" element={<TopStories />} />
          <Route path="/news/:id" element={<TransferDeal />} />
        </Routes>
      </Router>
      {/*<RandomStats />
     <button onClick={topFunction} id="myBtn" title="Go to top">
        <i className="fa-solid fa-arrow-up"></i>&nbsp;Top
      </button>
      <Footer />*/}
    </div>
  );
};

export default App;
