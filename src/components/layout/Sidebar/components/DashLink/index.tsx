"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeSVG } from "@/components/svgs";
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
      <HomeSVG fillColor={active ? "#213F7D" : "#7A8CB1"} />
      <span>Dashboard</span>
    </Link>
  );
};
export default DashLink;
