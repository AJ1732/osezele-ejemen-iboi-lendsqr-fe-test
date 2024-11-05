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
  const path = pathname.slice(1);
  
  const active = path === link;

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
        {children}
      </Link>
    </li>
  );
};
export default BarLink;
