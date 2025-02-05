import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentTime = new Date();

  return (
    <div className='footerBar'>
      <Link to='/contact'>
        <button>Contact Me</button>
      </Link>
      <h2>Copyright {currentTime.getFullYear()} All Rights Reserved</h2>
    </div>
  );
};
