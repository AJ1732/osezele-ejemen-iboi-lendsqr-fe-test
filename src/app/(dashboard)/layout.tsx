import { Header, Sidebar, MainViewHeader } from "@/components";
import styles from "./layout.module.scss";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles["dashLayout"]}>
      <Header className={styles["dashLayout__header"]} />
      <Sidebar className={styles["dashLayout__sidebar"]} />

      <main className={styles["dashLayout__main"]}>
        <MainViewHeader />
        {children}
      </main>
    </div>
  );
}
