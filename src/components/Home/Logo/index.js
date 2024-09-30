import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
// import LogoA from '../../../assets/images/logo-a.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

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

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          // transform="scale(1, -1) translate(0, -897)"  
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M 2795 800 L 2300 2900 L 2500 2900 L 2700 2300 L 3200 2300 L 3400 2900 L 3600 2900 L 3100 800 L 2795 800 Z M 2950 1200 L 3100 1900 L 2650 1900 Z"
            stroke="black"
            strokeWidth="5"
            fill="none"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
