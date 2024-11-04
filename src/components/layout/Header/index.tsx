import styles from "./header.module.scss";

interface HeaderProps {
  className: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`${styles.header} ${className || ""}`}>Header</header>
  );
};
export default Header;
