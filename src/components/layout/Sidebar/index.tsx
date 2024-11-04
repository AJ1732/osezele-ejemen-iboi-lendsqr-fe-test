import styles from "./sidebar.module.scss";

interface SidebarProps {
  className: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return <aside className={`${styles.sidebar} ${className || ""}`}>Sidebar</aside>;
};
export default Sidebar;
