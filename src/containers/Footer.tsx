import { Link } from 'react-router-dom';

//components
import { Button } from '../components/generics/Button';
import {NavBar} from '../components/generics/NavBar'

export const Footer = () => {
  const currentTime = new Date();

  return (
    <NavBar orientation={"col"}>
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
    </NavBar>
  );
};
