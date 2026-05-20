import React from "react";

interface ButtonProps {
  variant?: "primary" | "ghost" | "outline";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  variant = "primary",
  children,
  href,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 text-white font-medium transition-all duration-300 cursor-pointer text-sm tracking-wide";

  const variants = {
    primary:
      "bg-gold text-bg hover:bg-white hover:text-bg border border-gold",
    ghost: "bg-transparent text-white hover:text-gold border border-transparent",
    outline:
      "bg-transparent text-white border border-white hover:border-gold hover:text-gold",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={styles}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
