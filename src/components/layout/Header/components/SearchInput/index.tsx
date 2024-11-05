import styles from "./searchinput.module.scss";

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onSearch,
}) => {
  return (
    <div className={styles["search"]}>
      <input
        type="text"
        placeholder="Search for anything"
        value={value}
        onChange={onChange}
        className={styles["search__input"]}
      />
      <button
        type="button"
        onClick={onSearch}
        className={styles["search__button"]}
        aria-label="Search"
      >
        S
      </button>
    </div>
  );
};

export default SearchInput;
