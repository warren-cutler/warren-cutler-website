import cx from 'classnames';
import { useMemo } from 'react';

interface CardProps {
  orientation?: 'row' | 'col';
  background?: boolean;
  padSize?: 's' | 'm' | 'l' | 'none';
  children: React.ReactNode;
}

export const Card = ({
  orientation = 'row',
  background = true,
  padSize = 'm',
  children,
}: CardProps) => {
  const padSizeStyle = useMemo(() => {

    if (padSize === 'l') return 'px-5 py-1 ';
    if (padSize === 'm') return 'px-3 py-1 ';
    if (padSize === 's') return 'px-1  py-1 ';
  }, [padSize]);

  const layoutStyle = useMemo(() => {
    if (orientation === 'col') return 'flex flex-col';
    if (orientation === 'row') return 'flex ';
  }, [orientation]);

  return (
    <div
      className={cx(
        ' rounded-xl items-center text-wrap flex-wrap min-w-sm',
        layoutStyle,
        background ? ' bg-primary-700' : '',
        padSizeStyle
      )}
    >
      {children}
    </div>
  );
};
