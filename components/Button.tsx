import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={twMerge(
        "bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
