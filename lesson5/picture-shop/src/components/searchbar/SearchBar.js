import searchStyle from "./searchbar.module.css";

function SearchBar({ todos, setFilteredItems }) {
  const handleChange = (event) => {
    const value = event.target.value;
    const filteredItems = todos.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filteredItems);
  };

  return (
    <div className={searchStyle.container}>
      <input
        type="search"
        className={searchStyle.input}
        placeholder="Type to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
