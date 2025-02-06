import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navBar'>
      <Link to='/'>
        <div className='headshotLogo'>
          <img src='/src/assets/wc-headshot.jpg' width='100' height='100' alt='Warren Cutler headshot; click to return to website landing page'></img>
        </div>
      </Link>
      <div className='externalLinks'>
      <a href="https://www.linkedin.com/in/warren-cutler/"> <img src="/src/assets/linkedin-50.svg" height='30' width='30' alt="Click to visit my LinkedIn profile"/> </a> 
      <a href="https://github.com/warren-cutler"> <img src="/src/assets/github-50.svg" height='30' width='30' alt="Click to visit my Github profile"/> </a> 
      </div>
      <div className='internalLinks'>
        <Link to='/projects'>
          <button>Projects</button>
        </Link>
        <Link to='/resume'>
          <button>Resume</button>
        </Link>
        <Link to='/about'>
          <button>About Me</button>
        </Link>{' '}
      </div>
    </div>
  );
};
