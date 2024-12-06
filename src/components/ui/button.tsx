import { ButtonHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";

type Variants = {
  variant: { primary: string };
  size: { md: string };
};

const button = cva<Variants>(
  "flex items-center justify-center gap-x-2 outline-none transition-opacity " +
    "opacity-100 hover:opacity-90 active:opacity-80 rounded-lg " +
    "disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-white",
      },
      size: {
        md: "h-9 font-semibold text-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  isLoading?: boolean;
}

const Button = ({
  children,
  className,
  isLoading,
  variant,
  size,
  ...props
}: Props) => {
  return (
    <button className={button({ variant, size, className })} {...props}>
      {isLoading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
