import searchStyle from "./searchbar.module.css";

function SearchBar({ setFilteredItems }) {
  return (
    <div className={searchStyle.container}>
      <input
        type="search"
        name="todos_filter"
        className={searchStyle.input}
        placeholder="Type to search..."
        onChange={setFilteredItems}
      />
    </div>
  );
}

export default SearchBar;
