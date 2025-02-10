import cx from 'classnames';
import { useMemo } from 'react';

interface ButtonProps {
  size?: 'thin' | 'normal' | 'thick';
  primary?: boolean;
  bordered?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  size = 'normal',
  primary = true,
  bordered = false,
  children,
}: ButtonProps) => {
  const sizeStyle = useMemo(() => {
    if (size === 'thin') return 'px-0.5 py-0';
    if (size === 'normal') return 'px-2 py-1';
    if (size === 'thick') return 'px-6 py-2';
  }, [size]);

  const colorStyle = useMemo(() => {

    if (primary && !bordered)
      return `bg-primary-300    text-primary-950 hover:text-secondary-950 hover:bg-secondary-300 hover:outline hover:outline-secondary-950`;
    if (primary && bordered)
      return `bg-primary-300  outline outline-primary-950  text-primary-950 hover:text-secondary-950 hover:outline hover:bg-secondary-300 hover:outline-secondary-950`;
    if (!primary && !bordered)
      return `bg-secondary-300    text-secondary-950 hover:text-primary-950 hover:bg-primary-300  hover:outline hover:outline-primary-950`;
    if (!primary && bordered)
      return `bg-secondary-300  outline outline-secondary-950  text-secondary-950 hover:text-primary-950 hover:outline hover:bg-primary-300  hover:outline-primary-950`;
  }, [primary, bordered]);

  return (
    <button
      className={cx(
        'rounded-lg duration-300 ease-in ',
        colorStyle,
        sizeStyle
      )}
    >
      {children}
    </button>
  );
};
