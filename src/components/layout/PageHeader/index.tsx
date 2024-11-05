"use client";
import { usePathname } from "next/navigation";
import styles from "./pageHeader.module.scss";

const MainViewHeader = () => {
  const pathname = usePathname();
  const title =
    pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(2);

  return <header className={styles["header"]}>{title}</header>;
};
export default MainViewHeader;
