//types
import { Role } from "../types";

export const RoleCard = (role: Role) => {
  return (
    <div className="flex flex-col py-1">
      <div className="flex flex-col justify-between text-sm italic sm:flex-row md:text-base xl:text-lg">
        <p className="font-bold">{role.title}</p>
        <p className="">
          {role.dateStart.toLocaleDateString("en-US", {
            timeZone: "UTC",
            month: "short",
            year: "numeric",
          })}
          {" - "}
          {role.dateEnd.toLocaleDateString("en-US", {
            timeZone: "UTC",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
      <ul
        role="list"
        className="ml-5 list-inside list-disc text-xs md:text-sm lg:text-base xl:text-lg"
      >
        {role.details.map((detail) => {
          return <li>{detail}</li>;
        })}
      </ul>
    </div>
  );
};
