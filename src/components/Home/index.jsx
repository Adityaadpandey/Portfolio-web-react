import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo.svg'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['A', 'd', 'i', 't', 'y', 'a']
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
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

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

      <Loader type="pacman" />
    </>
  )
}

export default Home
