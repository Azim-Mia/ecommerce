import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
};

export function Button({
  variant = "default",
  size = "default",
  className = "",
  ...props
}: ButtonProps) {
  let baseStyle =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

  let variantStyle = "";
  let sizeStyle = "";

  // Variants
  if (variant === "default") {
    variantStyle = "bg-black text-white hover:bg-gray-800";
  } else if (variant === "ghost") {
    variantStyle = "bg-transparent hover:bg-gray-100";
  } else if (variant === "outline") {
    variantStyle = "border border-gray-300 hover:bg-gray-100";
  } else if (variant === "destructive") {
    variantStyle = "bg-red-500 text-white hover:bg-red-600";
  }

  // Sizes
  if (size === "default") {
    sizeStyle = "h-10 px-4 py-2 text-sm";
  } else if (size === "sm") {
    sizeStyle = "h-8 px-3 text-xs";
  } else if (size === "lg") {
    sizeStyle = "h-12 px-6 text-base";
  } else if (size === "icon") {
    sizeStyle = "h-10 w-10";
  }

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`}
      {...props}
    />
  );
}