import { cn } from "@/src/utils/cn";
import React, { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const TextField = ({
  id,
  name,
  placeholder,
  label,
  error,
  className,
  ...props
}: TextFieldProps) => {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-white">
        {label}
      </label>
      <input
        id={id}
        name={name}
        className={cn(
          "w-full md:py-3 md:px-6 py-1.5 px-4 bg-black text-white border border-gray-600 md:text-xl text-sm outline-none focus:border-white transition-all duration-200 ease-in-out",
          {
            "border-red-500 focus:border-red-500": error,
          },
          className
        )}
        placeholder={placeholder}
        {...props}
      />
      {error && <p className="text-red-500 text-base">{error}</p>}
    </div>
  );
};

export default TextField;
