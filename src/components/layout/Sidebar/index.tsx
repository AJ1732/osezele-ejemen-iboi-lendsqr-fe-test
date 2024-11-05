import clsx from "clsx";
import { BarLink, DashLink } from "./components";
import { barlinks } from "./constants";
import styles from "./sidebar.module.scss";

interface SidebarProps {
  className: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside className={clsx(styles.sidebar, "no-scrollbar", className)}>
      <div>
        <div />
        <span>Switch Organization</span>
        <div />
      </div>

      <DashLink />

      <nav>
        {barlinks.map(({ title, links }) => (
          <div key={title}>
            <h3>{title}</h3>
            <ul>
              {links.map(({ label }) => (
                <BarLink key={label} link={label}>
                  <div />
                  <span>{label}</span>
                </BarLink>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};
export default Sidebar;
