import React, { useRef } from "react";
import { useFilterItems } from "./hook";

export default function App() {
  const inputRef = useRef();
  const { query, setQuery, filteredItems, setItems } = useFilterItems();

  function handleAddNewItem(event) {
    event.preventDefault();
    const inputRefValue = inputRef.current.value;
    setItems((prevItems) => {
      return [...prevItems, inputRefValue];
    });
    inputRef.current.value = "";
  }

  function handleSetQuery(event) {
    event.preventDefault();
    setQuery(event.target.value);
  }

  return (
    <>
      {renderSearch(query, handleSetQuery)}
      {renderForm(inputRef, setItems, handleAddNewItem)}
      {renderFilteredItems(filteredItems)}
    </>
  );
}

function renderSearch(query, handleSetQuery) {
  return (
    <p className="search">
      <span>Search:</span>
      <input
        value={query}
        onChange={handleSetQuery}
        type="search"
        name="filter-search"
      />
    </p>
  );
}

function renderForm(inputRef, setItems, handleAddNewItem) {
  return (
    <form onSubmit={handleAddNewItem}>
      <span>New Item:</span>
      <input type="text" ref={inputRef} name="addNew" />
      <button type="submit">Add New</button>
    </form>
  );
}

function renderFilteredItems(filteredItems) {
  return (
    <>
      <h3>Items</h3>
      {filteredItems.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </>
  );
}
