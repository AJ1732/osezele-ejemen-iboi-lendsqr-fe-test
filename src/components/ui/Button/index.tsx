"use client";
import clsx from "clsx";
import styles from "./button.module.scss";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "primary" | "outline";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "primary",
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, styles[`button--${type}`], className)}
    >
      {label}
    </button>
  );
};

export default Button;
