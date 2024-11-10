"use client";
import clsx from "clsx";
import { Header, Sidebar, PageHeader } from "@/components";
import { useSidebar } from "@/context";
import styles from "./layout.module.scss";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { openSidebar } = useSidebar();

  return (
    <div className={styles["dashLayout"]}>
      <Header className={styles["dashLayout__header"]} />
      <Sidebar
        className={clsx(styles["dashLayout__sidebar"], {
          [styles["dashLayout__sidebar--open"]]: openSidebar,
        })}
      />

      <main className={styles["dashLayout__main"]}>
        <PageHeader />
        {children}
      </main>
    </div>
  );
}
