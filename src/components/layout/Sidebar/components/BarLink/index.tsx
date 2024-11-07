"use client";
import clsx from "clsx";
import Link from "next/link";
import styles from "./barlink.module.scss";
import { usePathname } from "next/navigation";

interface BarLinkProps {
  link: string;
  className?: string;
  children: React.ReactNode;
}

const BarLink: React.FC<BarLinkProps> = ({ link, className, children }) => {
  const pathname = usePathname();

  const active =
    pathname === `/${link}` ||
    (pathname.startsWith(`/${link}`) && pathname[link.length + 1] === "/");

  return (
    <li>
      <Link
        href={`/${link}`}
        className={clsx(
          styles.barlink,
          { [styles["barlink--active"]]: active },
          className
        )}
      >
        <div />
        {children}
      </Link>
    </li>
  );
};
export default BarLink;
