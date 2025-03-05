import styles from "./searchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search posts" />
    </div>
  );
};

export default SearchBar;
