import cx from 'classnames';
import React from 'react';

interface NavBarProps {
  orientation?: 'row' | 'col';
  children: React.ReactNode;
}

export const NavBar = ({ orientation = 'row', children }: NavBarProps) => {
  return (
    <div
      className={cx(
        'flex bg-primary-700 rounded-xl items-center px-5 m-5 py-1 justify-around min-w-sm',
        orientation == 'col' ? 'flex-col' : ''
      )}
    >
      {children}
    </div>
  );
};
