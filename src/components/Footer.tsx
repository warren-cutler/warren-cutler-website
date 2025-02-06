import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentTime = new Date();

  return (
    <div className='footerBar'>
      <Link to='/contact'>
        <button>Contact Me</button>
      </Link>
      <p>Copyright {currentTime.getFullYear()} Warren Cutler. All Rights Reserved.</p>
      <div className='logoLinks'><a target="_blank" href="https://icons8.com/icon/447/linkedin">LinkedIn</a>, <a target="_blank" href="https://icons8.com/icon/12598/github">GitHub</a> icons by <a target="_blank" href="https://icons8.com">Icons8</a></div>
    </div>
  );
};
