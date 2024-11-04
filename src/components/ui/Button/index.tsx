"use client"
import styles from './Button.module.scss';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'primary' | 'outline';
  className?: string; 
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'primary', className }) => {
  return (
    <button
      className={`${styles.button} ${styles[`button--${type}`]} ${className || ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
