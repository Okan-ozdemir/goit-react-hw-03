import "./SearchBox.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="search-container">
      <h2 className="search-title">Find contacts by name</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
