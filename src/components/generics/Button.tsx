import cx from 'classnames';
import { useMemo } from 'react';

interface ButtonProps {
  size?: 'thin' | 'normal' | 'thick';
  primary?: boolean;
  bordered?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button = ({
  size = 'normal',
  primary = true,
  bordered = false,
  className,
  children,
}: ButtonProps) => {
  const sizeStyle = useMemo(() => {
    if (size === 'thin') return 'px-0.5 py-0';
    if (size === 'normal') return 'px-2 py-1';
    if (size === 'thick') return 'px-6 py-2';
  }, [size]);

  const colorStyle = useMemo(() => {
    if (primary)
      return `bg-primary-300 outline-primary-950 text-primary-950 hover:text-secondary-950 hover:bg-secondary-300 hover:outline-secondary-950`;
    if (!primary)
      return `bg-secondary-300  outline-secondary-950  text-secondary-950 hover:text-primary-950 hover:bg-primary-300  hover:outline-primary-950`;
  }, [primary]);

  return (
    <button
      className={cx(
        className,
        'cursor-pointer rounded-lg duration-300 ease-in hover:outline  drop-shadow-def disabled:opacity-75',
        bordered ? 'outline' : '',
        colorStyle,
        sizeStyle
      )}
    >
      {children}
    </button>
  );
};
