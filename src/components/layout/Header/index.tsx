"use client";
import clsx from "clsx";
import { useState } from "react";
import { ActionsSection, SearchInput } from "./components";
import { LogoSVG } from "@/components/svgs";
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

      <ActionsSection />
    </header>
  );
};
export default Header;
