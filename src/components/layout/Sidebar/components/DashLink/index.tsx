"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./dashlink.module.scss";

const DashLink = () => {
  const pathname = usePathname();
  const active = pathname === "/dashboard";

  return (
    <Link
      href={"/dashboard"}
      className={clsx(styles["dashlink"], {
        [styles["dashlink--active"]]: active,
      })}
    >
      <div />
      <span>Dashboard</span>
    </Link>
  );
};
export default DashLink;
