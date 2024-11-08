"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { BarLink, DashLink } from "./components";
import { BriefCaseSVG, DropdownSVG, SignOutSVG } from "@/components/svgs";
import { barlinks } from "./constants";
import styles from "./sidebar.module.scss";

interface SidebarProps {
  className: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <aside className={clsx(styles["sidebar"], "no-scrollbar", className)}>
      <div>
        <BriefCaseSVG />
        <span>Switch Organization</span>
        <DropdownSVG />
      </div>

      <DashLink />

      <nav>
        {barlinks.map(({ title, links }) => (
          <div key={title}>
            <h4>{title}</h4>
            <ul>
              {links.map(({ link, Icon }) => {
                const active =
                  pathname === `/${link}` ||
                  (pathname.startsWith(`/${link}`) &&
                    pathname[link.length + 1] === "/");

                return (
                  <BarLink key={link} link={link}>
                    <div>
                      {Icon ? (
                        <Icon fillColor={active ? "#213F7D" : "#7A8CB1"} />
                      ) : (
                        <div />
                      )}
                    </div>
                    <span>{link}</span>
                  </BarLink>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className={styles["logout"]}>
        <SignOutSVG />
        <span>Logout</span>
      </div>

      <p>v1.2.0</p>
    </aside>
  );
};
export default Sidebar;
