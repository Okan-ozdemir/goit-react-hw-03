import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.searchContainer}>
      <h2 className={styles.searchTitle}>Find contacts by name</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.searchInput}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
