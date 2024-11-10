import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { SidebarProvider } from "@/context";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Lendsqr Admin Console",
  description: "Developed by 1732",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#39CDCC" />
        <SidebarProvider>{children}</SidebarProvider>
      </body>
    </html>
  );
}
