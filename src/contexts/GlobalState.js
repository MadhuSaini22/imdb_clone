import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
 
};
// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  
  useEffect(() => {
    // localStorage.setItem(`${userEmail}`, JSON.stringify(state.watchlist) )
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    // localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // console.log("Watched list is ", localStorage.getItem("watchlist"));

  // actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };
 
  
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,

        addMovieToWatchlist,
        removeMovieFromWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
