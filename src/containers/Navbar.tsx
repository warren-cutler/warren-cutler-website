import { Link } from 'react-router-dom';

//components
import { Button } from '../components/Button';

export const Navbar = () => {
  return (
    <div className='flex bg-primary-700 rounded-xl items-center px-5 m-5 py-1 justify-around min-w-sm'>
      <Link to='/'>
        <img
          className='rounded-full w-25 h-25'
          src='/src/assets/wc-headshot.jpg'
          alt='Warren Cutler headshot; click to return to website landing page'
        ></img>
      </Link>
      <div className='flex-col px-3'>
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
    </div>
  );
};
