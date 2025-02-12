import { Link } from 'react-router-dom';

//components
import { Button } from './generics/Button';
import { NavBar } from './generics/NavBar';

export const Header = () => {
  return (
    <NavBar>
      <Link to='/' className='shrink-0'>
        <img
          className='rounded-full w-20 h-20'
          src='/src/assets/wc-headshot.jpg'
          alt='Warren Cutler headshot; click to return to website landing page'
        ></img>
      </Link>
      <div className='flex-col px-3 shrink-1'>
        <a href='https://www.linkedin.com/in/warren-cutler/' target='_blank'>
          <img
            className='w-7 h-7 mb-2'
            src='/src/assets/linkedin-50.svg'
            alt='Click to visit my LinkedIn profile'
          />
        </a>
        <a href='https://github.com/warren-cutler' target='_blank'>
          <img
            className='rounded-full w-7 h-7 mt-2'
            src='/src/assets/github-50.svg'
            alt='Click to visit my Github profile'
          />
        </a>
      </div>
      <div className='flex justify-around grow'>
        <Link to='/projects'>
          <Button>Projects</Button>
        </Link>
        <Link to='/resume'>
          <Button>Resume</Button>
        </Link>
        <Link to='/about'>
          <Button>About</Button>
        </Link>
      </div>
    </NavBar>
  );
};
