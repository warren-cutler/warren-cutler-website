import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navBar'>
      <Link to='/'>
        <div className='headshotLogo'>
          <img src='/src/assets/wc-headshot.jpg' width='100' height='100'></img>
        </div>
      </Link>
      <div className='externalLinks'>
        <p>LI</p>
        <p>GH</p>
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
