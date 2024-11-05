"use client";
import { useState } from "react";
import { SearchInput } from "./components";
import styles from "./header.module.scss";
import Link from "next/link";

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
    <header className={`${styles.header} ${className || ""}`}>
      <h1>lendsqr</h1>

      <SearchInput
        value={searchQuery}
        onChange={handleSearchChange}
        onSearch={handleSearch}
      />

      <div className={styles.header__actions}>
        <Link href={"."} >Docs</Link>

        <div  />
      </div>
    </header>
  );
};
export default Header;
