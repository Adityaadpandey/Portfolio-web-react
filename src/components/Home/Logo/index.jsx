import { useRef, useEffect } from 'react';
import vid from '../../../assets/cube.mp4';
import './index.scss';

const Logo = () => {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const video = videoRef.current;

    video.play();

    const render = () => {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      requestAnimationFrame(render);
    };

    render();
  }, []);

  return (
    <div className='logo-container'>
      <video
        ref={videoRef}
        src={vid}
        loop
        autoPlay
        muted
        style={{ display: 'none' }} // Hide the actual video element
      />
      <canvas ref={canvasRef} width={600} height={650} /> {/* Set desired dimensions */}
    </div>
  );
}

export default Logo;
