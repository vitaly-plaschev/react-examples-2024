import React from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import { Form, Outlet, useSubmit } from "react-router-dom";

function SearchPage() {
  const submit = useSubmit();
  return (
    <Form>
      <SearchBar
        setFilteredItems={(event) => submit(event.currentTarget.form)}
      />
      <Outlet />
    </Form>
  );
}

export default SearchPage;
