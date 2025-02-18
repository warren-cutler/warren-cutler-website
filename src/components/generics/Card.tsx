import cx from 'classnames';

interface CardProps {
  background?: boolean;
  border?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Card = ({
  background = true,
  border = false,
  children,
  className,
}: CardProps) => {
  return (
    <div
      className={cx(
        className,
        ' rounded-xl drop-shadow-def',
        background ? ' bg-primary-500' : '',
        border ? 'border border-primary-950' : ''
      )}
    >
      {children}
    </div>
  );
};
