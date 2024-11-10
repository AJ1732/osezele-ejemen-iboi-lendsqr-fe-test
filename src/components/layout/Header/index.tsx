"use client";
import clsx from "clsx";
import { useState } from "react";
import { ActionsSection, SearchInput } from "./components";
import { AlignLeftSVG, DropdownSVG, LogoSVG } from "@/components/svgs";
import styles from "./header.module.scss";
import { useSidebar } from "@/context";

interface HeaderProps {
  className: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { toggleSidebar, openMenubar, toggleMenubar } = useSidebar();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <header className={clsx(styles["header"], className)}>
      <button
        onClick={toggleSidebar}
        className={styles["header__sidebar__toggle"]}
      >
        <AlignLeftSVG />
      </button>

      <LogoSVG />

      <div className={styles["header__lg__nav"]}>
        <SearchInput
          value={searchQuery}
          onChange={handleSearchChange}
          onSearch={handleSearch}
        />

        <ActionsSection />
      </div>

      {openMenubar && (
        <div className={styles["header__sm__nav"]}>
          <SearchInput
            value={searchQuery}
            onChange={handleSearchChange}
            onSearch={handleSearch}
          />

          <ActionsSection className={styles["header__sm__nav__actions"]} />
        </div>
      )}

      <button
        onClick={toggleMenubar}
        className={styles["header__mobile__toggle"]}
      >
        <DropdownSVG />
      </button>
    </header>
  );
};
export default Header;
