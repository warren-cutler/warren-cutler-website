import cx from "classnames";
import React from "react";

interface NavBarProps {
  outline?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const NavBar = ({
  className,
  outline = false,
  children,
}: NavBarProps) => {
  return (
    <div
      className={cx(
        className,
        "bg-primary-700 drop-shadow-def flex min-w-xs items-center self-stretch rounded-2xl",
        outline ? "border-primary-950 outline" : "",
      )}
    >
      {children}
    </div>
  );
};
