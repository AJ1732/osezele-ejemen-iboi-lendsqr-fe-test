"use client";
import { usePathname, useRouter } from "next/navigation";
import styles from "./pageHeader.module.scss";

const MainViewHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const title = pathname.startsWith("/users/")
    ? "Users Details"
    : pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(2);

  const parentPath = pathname.split("/")[1];
  const parentRoute = `/${parentPath}`;
  const backLinkText = `Back to ${
    parentPath.charAt(0).toUpperCase() + parentPath.slice(1)
  }`;

  return (
    <header className={styles["header"]}>
      {pathname !== parentRoute && (
        <div onClick={() => router.push(parentRoute)}>
          <div />
          <span>{backLinkText}</span>
        </div>
      )}

      <h2>{title}</h2>
    </header>
  );
};
export default MainViewHeader;
