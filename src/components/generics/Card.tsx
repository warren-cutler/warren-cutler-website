import cx from "classnames";

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
        "drop-shadow-def rounded-xl",
        background ? "bg-primary-500" : "",
        border ? "border-primary-950 border" : "",
      )}
    >
      {children}
    </div>
  );
};
