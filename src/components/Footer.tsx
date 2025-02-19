import { Link } from "react-router-dom";

//components
import { Button } from "./generics/Button";
import { NavBar } from "./generics/NavBar";

export const Footer = () => {
  const currentTime = new Date();

  return (
    <NavBar className="my-3 flex min-w-sm flex-col px-2 py-1 sm:mx-5">
      <Link to="/contact">
        <Button className="mt-2" size={"thin"}>
          Contact Me
        </Button>
      </Link>
      <p className='text-sm md:text-base'>
        Copyright {currentTime.getFullYear()} Warren Cutler. All Rights
        Reserved.
      </p>
      <div className="text-[0.5em]">
        <p>
          <a
            target="_blank"
            className="underline"
            href="https://icons8.com/icon/447/linkedin"
          >
            LinkedIn
          </a>
          ,&nbsp;
          <a
            target="_blank"
            className="underline"
            href="https://icons8.com/icon/12598/github"
          >
            GitHub
          </a>
          &nbsp;icons by:&nbsp;
          <a target="_blank" className="underline" href="https://icons8.com">
            Icons8
          </a>
        </p>
      </div>
    </NavBar>
  );
};
