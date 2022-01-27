import { useState } from "react";

const apiKey = "8286abdd3c9b4565ab627f63bee922e2";
const baseURL = "https://newsapi.org/v2/everything?";

function getDateFromOneWeekAgo(){
    const d = new Date();
    d.setDate(d.getDate()-7);
    return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
}

function useSearch() {
    const [results, setResults] = useState([]);
    const [lastSearchQuery, setLastSearchQuery] = useState("");

    const dateFrom = getDateFromOneWeekAgo();
    const pageSize = 20;
    
    async function search(query){
        if(typeof query !== 'string' || query.length === 0)
            return new Promise((resolve, reject) =>
              reject({ message: "bad query" })
            );

        setResults([]);
        const url = `${baseURL}q=${query}&from=${dateFrom}&apiKey=${apiKey}&pageSize=${pageSize}`;
        let searchResults;
        
        try {
            const res = await fetch(url);
            searchResults = await res.json();
        }
        catch (e){
            return new Promise((resolve, reject) =>
              reject(e)
            );
        }

        if(searchResults){
            setLastSearchQuery(query);
            setResults(searchResults.articles);
            return new Promise((resolve) => resolve({ succeed: true }));
        }
        else {
            setResults([]);
            return new Promise((resolve, reject) =>
              reject({ message: "something went wrong" })
            );
        }
    }

    return [results, lastSearchQuery, search];
}

export default useSearch;