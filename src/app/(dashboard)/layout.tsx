import styles from "./layout.module.scss";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.dashLayout}>
      <header className={styles.dashLayout__header}>Headbar</header>

      <aside className={styles.dashLayout__sidebar}>Sidebar</aside>
      <main className={styles.dashLayout__main}>{children}</main>
    </div>
  );
}
