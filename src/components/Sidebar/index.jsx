import {
  faGithub,
  faInstagram,
  faLinkedin,
  // faSkype,
  // faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
  faBars,
  faClose,
  faEnvelope,
  faHome,
  faBook,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo.svg'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import './index.scss'
//  #4d4d4e
const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
        {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#ffff" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#ffff" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio-builder"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#ffff" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >

          <FontAwesomeIcon icon={faEnvelope} color="#ffff" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="guestbook-link"
          to="/guestbook"
          onClick={() => setShowNav(false)}
        >

          <FontAwesomeIcon icon={faBook} color="#ffff" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="rgb(255, 81, 110)"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://linkedin.com/in/adpandeyadp"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#ffff"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/adityaadpandey"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#ffff"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/adp_alpha"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              color="#ffff"
              className="anchor-icon"
            />
          </a>
        </li>
        {/* <li>
          <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faSkype}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li> */}
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="rgb(255, 81, 110)"
        size="3x"
        className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
