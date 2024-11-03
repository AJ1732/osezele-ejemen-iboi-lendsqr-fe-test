export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header>Headbar</header>

      <aside>Sidebar</aside>
      <main>{children}</main>
    </div>
  );
}
