//components
import { Card } from "../components/generics/Card";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-around lg:flex-row">
      <Card className="mx-2 my-3 flex max-w-2xl min-w-xs flex-col items-center">
        <img
          src="/src/assets/wc-outdoor.jpg"
          className="max-h-50 rounded-3xl p-3 md:max-h-75 lg:max-h-90 xl:max-h-120"
        ></img>
        <h2 className="font-bold md:text-lg lg:text-xl xl:text-2xl">
          Warren Cutler
        </h2>
        <h3 className="p-1 text-sm italic md:text-base lg:text-lg xl:text-xl">
          Fullstack Software Engineer
        </h3>
        <h3 className="pb-1 text-sm italic lg:text-base xl:text-lg">
          Boston, MA
        </h3>
      </Card>
      <Card className="mx-2 my-3 flex max-w-lg min-w-xs flex-col items-center px-2 py-1 xl:max-w-xl">
        <h1 className="mt-2 text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl">
          Hello and Welcome!
        </h1>
        <div className="bg-primary-950 my-3 h-0.5 w-25 md:h-1 lg:h-1.5 rounded-full md:w-35 lg:w-50"></div>
        <p className="text-sm md:text-base">
          Home Page Coming Soon Home Page Coming Soon Home Page Coming Soon Home
          Page Coming Soon Home Page Coming Soon Home Page Coming Soon Home Page
          Coming Soon
        </p>
        <p className="mt-5 text-justify text-sm md:text-base">
          In my spare time, I enjoy taking advantage of New England summers
          through hiking and disc golf. You'll often see me nose-deep in fantasy
          or sci-fi novels, if I'm not busy playing board games with friends.
        </p>
      </Card>
    </div>
  );
};
