import { useState } from "react";

const apiKey = "8286abdd3c9b4565ab627f63bee922e2";
const baseURL = "https://nomoreparties.co/news/v2/top-headlines?";

function getDateFromOneWeekAgo() {
  const d = new Date();
  d.setDate(d.getDate() - 7);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function useSearch() {
  const [results, setResults] = useState(
    localStorage.getItem("search-results")
      ? JSON.parse(localStorage.getItem("search-results"))
      : []
  );
  const [lastSearchQuery, setLastSearchQuery] = useState(
    localStorage.getItem("lastKeyword") || ""
  );

  const dateFrom = getDateFromOneWeekAgo();
  const pageSize = 20;

  async function search(query) {
    if (typeof query !== "string" || query.length === 0) {
      return Promise.reject({ message: "bad query" });
    }

    setResults([]);
    const url = `${baseURL}q=${query}&from=${dateFrom}&apiKey=${apiKey}&pageSize=${pageSize}`;
    let searchResults;

    try {
      const res = await fetch(url);
      searchResults = await res.json();
    } catch (e) {
      return Promise.reject(e);
    }

    if (searchResults) {
      setLastSearchQuery(query);
      setResults(searchResults.articles);
      localStorage.setItem(
        "search-results",
        JSON.stringify(searchResults.articles)
      );
      localStorage.setItem("lastKeyword", query);
      return Promise.resolve({ succeed: true });
    } else {
      setResults([]);
      return Promise.reject({ message: "something went wrong" });
    }
  }

  return [results, lastSearchQuery, search];
}

export default useSearch;
