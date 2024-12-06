import React, { forwardRef } from "react";
import { cx } from "class-variance-authority";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, label, value = "", error, ...props }, ref) => {
    return (
      <label className={cx("flex flex-col gap-y-1", className)}>
        <span className="text-neutral-400 font-medium">{label}</span>
        <input
          ref={ref}
          value={value}
          {...props}
          className={cx(
            "border px-4 py-2 rounded-md h-9 outline-none focus:border-primary-300",
            error
              ? "border-error-600 focus:border-error-600"
              : "border-neutral-100",
            className,
          )}
        />
        {error && <span className="text-sm text-error-600">{error}</span>}
      </label>
    );
  },
);

Input.displayName = "Input";

export default Input;
