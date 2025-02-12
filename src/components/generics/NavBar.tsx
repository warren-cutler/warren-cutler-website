import cx from 'classnames';
import React from 'react';

interface NavBarProps {
  outline?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const NavBar = ({
  className,
  outline = true,
  children,
}: NavBarProps) => {
  return (
    <div
      className={cx(
        'flex bg-primary-700 rounded-2xl items-center min-w-sm drop-shadow-def',
        outline ? 'outline border-primary-950' : '',
        className
      )}
    >
      {children}
    </div>
  );
};
