import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

// Static JSON data for portfolio projects
const portfolioData = [
  {
    name: 'Hotel Aroma',
    description: 'Hotel management system using React, HTML, CSS',
    image: '/img/agh.png', // Update with correct image paths
    url: 'https://github.com/user/hotel-aroma',
  },
  {
    name: 'People Find',
    description: 'Python tool for individual search using profile pictures',
    image: '/img/agh.png',
    url: 'https://github.com/user/people-find',
  },
  {
    name: 'Linux Package Installer',
    description: 'Python script for package management',
    image: '/img/linux-package-installer.png', // Update with correct image paths
    url: 'https://github.com/user/linux-package-installer',
  },
  {
    name: 'A.I. (Human-like Talking Bot)',
    description: 'Python-based chatbot that can interact with users',
    image: '/img/ai-talking-bot.png', // Update with correct image paths
    url: 'https://github.com/user/ai-talking-bot',
  },
  {
    name: 'Song Recommendation Bot',
    description: 'Python bot for song recommendations',
    image: '/img/song-recommendation-bot.png', // Update with correct image paths
    url: 'https://github.com/user/song-recommendation-bot',
  },
  {
    name: 'Real-Time Object Detection',
    description: 'Project for real-time object detection with advanced algorithms',
    image: '/img/object-detection.png', // Update with correct image paths
    url: 'https://github.com/user/real-time-object-detection',
  },
];

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [portfolio] = useState(portfolioData);

  // Animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Render portfolio projects
  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => (
          <div className="image-box" key={idx}>
            <img 
              src={port.image}
              className="portfolio-image"
              alt={port.name}
            />
            <div className="content">
              <h2 className="title">{port.name}</h2>
              <h4 className="description">{port.description}</h4>
              <button
                className="btn"
                onClick={() => window.open(port.url, '_blank')}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
