import React, { useState, useEffect } from "react";
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const GuestBook = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState({ title: "", content: "" });
  
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)
  }, [])
  useEffect(() => {
    // Fetch thoughts from API
    fetch("https://backendrportfolio-production.up.railway.app/api")
      .then((response) => response.json())
      .then((data) => setThoughts(data.reverse()))  // Reverse to get latest thoughts first
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post new thought to API
    fetch("https://backendrportfolio-production.up.railway.app/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newThought),
    })
      .then((response) => response.json())
      .then((data) => {
        setThoughts([data, ...thoughts]);  // Add new thought to the beginning
        setNewThought({ title: "", content: "" });
      })
      .catch((error) => console.error("Error posting data: ", error));
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="container guestbook-page">
        <div className="text-zone">
          <h1>
          <AnimatedLetters
              letterClass={letterClass}
              strArray={['W', 'e', 'l', 'c', 'o', 'm', 'e',' ', 't', 'o', ' ', 'm', 'y', ' ', 'G', 'u', 'e', 's', 't', 'B', 'o', 'o', 'k']}
              idx={10}
            />
          </h1>
          <div className="input-container">
          <form onSubmit={handleSubmit}>
  <ul>
    <li className="half">
      <input
        type="text"
        className="username-input"
        placeholder="Your GitHub username"
        value={newThought.title}
        onChange={(e) => setNewThought({ ...newThought, title: e.target.value })}
        required
      />
    </li>
    <li className="half">
      <input
        type="text"
        className="other-input"
        placeholder="Please type your message here..."
        value={newThought.content}
        onChange={(e) => setNewThought({ ...newThought, content: e.target.value })}
        required
      />
    </li>
    <li>
      <input type="submit" className="flat-button" value="Submit" />
    </li>
  </ul>
</form>

          </div>
        
        
        <div className="thoughts-list">
          {thoughts.map((thought, index) => (
            <div className="thought-card" key={index}>
              <img src={thought.img} alt={thought.title} />
              <div className="thought-content">
                <h3>{thought.title}</h3>
                <p>{thought.content}</p>
                <span>{formatDate(thought.date)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
      <Loader type="pacman" />
    </>
  );
};

export default GuestBook;
