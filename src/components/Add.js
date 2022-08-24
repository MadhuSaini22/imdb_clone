import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="">
      <div className="max-w-container">
        <div className="">
          <div className="input-wrapper text-black">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {results
            ? results.length > 0 && (
                <ul className="">
                  {results.map((movie) => (
                    <li key={movie.id}>
                      <ResultCard movie={movie} />
                    </li>
                  ))}
                </ul>
              )
            : ""}
        </div>
      </div>
    </div>
  );
};
