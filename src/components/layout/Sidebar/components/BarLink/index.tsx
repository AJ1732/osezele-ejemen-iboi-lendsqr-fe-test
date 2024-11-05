import styles from "./barlink.module.scss";

interface BarLinkProps {
  active?: boolean;
  className?: string;
  children: React.ReactNode;
}

const BarLink: React.FC<BarLinkProps> = ({
  active,
  className,
  children,
}) => {
  return (
    <li>
      <button
        className={`
        ${styles["barlink"]} 
        ${active && styles["barlink--active"]} 
        ${className || ""}
      `}
      >
        {children}
      </button>
    </li>
  );
};
export default BarLink;
