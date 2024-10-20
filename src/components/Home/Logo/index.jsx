import './index.scss'
import vid from '../../../assets/cube.mp4'

const Logo = () => {

  return (
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
  )
}

export default Logo
