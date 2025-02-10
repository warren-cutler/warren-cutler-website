import { Link } from 'react-router-dom';

//components
import { Button } from '../components/Button';

export const Footer = () => {
  const currentTime = new Date();

  return (
    <div className='flex-col bg-primary-700 text-primary-950 rounded-xl items-center px-5 m-5 py-1 justify-items-center min-w-sm'>
      <Link to='/contact'>
        <Button size={'thin'}>Contact Me</Button>
      </Link>
      <p>
        Copyright {currentTime.getFullYear()} Warren Cutler. All Rights
        Reserved.
      </p>
      <div className='text-[0.5em]'>
        <p>
          <a target='_blank' href='https://icons8.com/icon/447/linkedin'>
            LinkedIn
          </a>
          ,&nbsp;
          <a target='_blank' href='https://icons8.com/icon/12598/github'>
            GitHub
          </a>
          &nbsp;icons by:&nbsp;
          <a target='_blank' href='https://icons8.com'>
            Icons8
          </a>
        </p>
      </div>
    </div>
  );
};
