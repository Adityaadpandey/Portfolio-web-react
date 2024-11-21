import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/logo.svg';
import Logo from './Logo';
import './index.scss';
import ChatBot from 'react-simple-chatbot';
import axios from 'axios';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const nameArray = ['A', 'd', 'i', 't', 'y', 'a'];
  const jobArray = [
    'A',
    'I',
    ' ',
    '/',
    ' ',
    'M',
    'L',
    ' ',
    'F',
    'u',
    'l',
    'l',
    ' ',
    'S',
    't',
    'a',
    'c',
    'k',
    ' ',
    'D',
    'e',
    'v',
    '.',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const CustomResponse = ({ previousStep, steps, triggerNextStep }) => {
    const [response, setResponse] = useState('Fetching response...');
  
    useEffect(() => {
      const fetchResponse = async () => {
        try {
          const apiResponse = await axios.post(
            'https://backend-r-portfolio.onrender.com/api/agi',
            { chat: previousStep.message },
            { headers: { 'Content-Type': 'application/json' } }
          );
  
          if (typeof apiResponse.data.result === 'object') {
            // Format objects for better readability
            setResponse(JSON.stringify(apiResponse.data.result, null, 2));
          } else {
            setResponse(apiResponse.data.result);
          }
        } catch (error) {
          console.error('Error fetching chat response:', error);
          setResponse('An error occurred while fetching the response.');
        } finally {
          triggerNextStep();
        }
      };
  
      fetchResponse();
    }, [previousStep, triggerNextStep]);
  
    return (
      <div className="custom-response">
        <pre className="response-text">{response}</pre>
      </div>
    );
  };
  

  const steps = [
    {
      id: '1',
      message: 'Hi! How can I help you?',
      trigger: 'userInput',
    },
    {
      id: 'userInput',
      user: true,
      trigger: 'customResponse',
    },
    {
      id: 'customResponse',
      component: <CustomResponse />,
      waitAction: true,
      trigger: '1',
    },
  ];

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={0}
            />
          </h1>
          <h2>MERN, Python, React-Native expert</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <button className="chat-toggle-button" onClick={handleToggleChat}>
        💬
      </button>

      {isChatOpen && (
        <div className="chatbot-container">
          <ChatBot steps={steps} />
        </div>
      )}
      <Loader type="pacman" />
    </>
  );
};

export default Home;
