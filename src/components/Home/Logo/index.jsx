import './index.scss'
import vid from '../../../assets/cube.mp4'
import { Suspense } from 'react'
import Loader from 'react-loaders'


const Logo = () => {

  return (
    <Suspense fallback={<Loader type="pacman" />}>
       <div className='logo-container'>
      <video
        src={vid}  
        loop
        autoPlay
        muted
        preload="auto" 
        // style={{ display: 'block' }}
      />
    </div>
   </Suspense>
  )
}

export default Logo
