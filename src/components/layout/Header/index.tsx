"use client";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SearchInput } from "./components";
import { Dropdown2SVG, LogoSVG, NotificationSVG } from "@/components/svgs";
import styles from "./header.module.scss";

interface HeaderProps {
  className: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <header className={clsx(styles["header"], className)}>
      <LogoSVG />

      <SearchInput
        value={searchQuery}
        onChange={handleSearchChange}
        onSearch={handleSearch}
      />

      <div className={styles["header__actions"]}>
        <Link href={"."}>Docs</Link>

        <div className={styles["header__actions__icon"]}>
          <NotificationSVG />
        </div>

        <div className={styles["header__actions__profile"]}>
          <figure>
            <Image
              src={"/img/profile-img.png"}
              alt="profile"
              width={48}
              height={48}
            />
          </figure>
          <span>Adedeji</span>
          <Dropdown2SVG />
        </div>
      </div>
    </header>
  );
};
export default Header;
