import { useEffect, useRef,useState } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
// import LogoA from '../../../assets/images/logo-a.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef() 

  const [rotation, setRotation] = useState({ x: 30, y: 30 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prevRotation => ({
        x: prevRotation.x + 1,
        y: prevRotation.y + 1,
      }));
    }, 12); // Adjust the interval to control the speed of rotation

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      {/* <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoA}
        alt="JavaScript, Developer"
      /> */}

<div className="rubiks-container">
      <div
        className="rubiks-cube"
        style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
      >
        <div className="face front">
          {Array(9).fill().map((_, i) => <div key={i} className="cube-tile"></div>)}
        </div>
        <div className="face back">
          {Array(9).fill().map((_, i) => <div key={i} className="cube-tile"></div>)}
        </div>
        <div className="face left">
          {Array(9).fill().map((_, i) => <div key={i} className="cube-tile"></div>)}
        </div>
        <div className="face right">
          {Array(9).fill().map((_, i) => <div key={i} className="cube-tile"></div>)}
        </div>
        <div className="face top">
          {Array(9).fill().map((_, i) => <div key={i} className="cube-tile"></div>)}
        </div>
        <div className="face bottom">
          {Array(9).fill().map((_, i) => <div key={i} className="cube-tile"></div>)}
        </div>
      </div>
    </div>


    </div>
  )
}

export default Logo
