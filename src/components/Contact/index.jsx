import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm( "service_0olntt5",'template_cz5i0uj', form.current, 'A7N1vPflw3XYeYeu-', )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        (error) => {
          console.log(error.text)  // Log error for debugging
          alert(error.text) // Log error for debugging
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
        Lovely Professional University (LPU),
          <br />
          Jalandhar
          <br />
          144001
          <br />
          {/* Sremska Mitrovica <br /> */}
          <br />
          <span>adityapandeyadp@gmail.com</span>
        </div>
        <div className="map-wrap">
        <MapContainer center={[31.2760, 75.7814]} zoom={13}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  <Marker position={[31.2760, 75.7814]}>
    <Popup>LPU Jalandhar, come over for a cup of coffee :)</Popup>
  </Marker>
</MapContainer>

        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
