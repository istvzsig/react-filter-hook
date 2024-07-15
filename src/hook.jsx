import { useState, useMemo } from "react";

export function useFilterItems() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filteredItems = useMemo(() => {
    return items.filter(
      (item) => {
        return item.toLocaleLowerCase().includes(query.toLocaleLowerCase());
      },
      [items, query]
    );
  });

  return {
    items,
    setItems,
    query,
    setQuery,
    filteredItems,
  };
}
