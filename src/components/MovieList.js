import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import Heading from "./Heading";
import { IMAGE_END } from "../Config";

const multiselectRef = React.createRef();
const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `    https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&${IMAGE_END}`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };
  // console.log(selected);
  const genres = [
    { id: 28, value: "Action" },
    { id: 12, value: "Adventure" },
    { id: 14, value: "Fantasy" },
    { id: 16, value: "Animation" },
    { id: 878, value: "Science Fiction" },
    { id: 53, value: "Thriller" },
    { id: 18, value: "Drama" },
    { id: 35, value: "Comedy" },
    { id: 27, value: "Horror" },
    { id: 10749, value: "Romance" },
    { id: 9648, value: "Mystery" },
    { id: 80, value: "Crime" },
    { id: 10751, value: "Family" },
  ];
  const [options] = useState(genres);

  useEffect(() => {
    const list = [];
    for (var i = 0; i < movieList.length; i++) {
      let flag = false;
      const max = movieList[i];

      for (var j = 0; j < max.genre_ids.length; j++) {
        const gen_id = max.genre_ids[j];

        for (var k = 0; k < selected.length; k++) {
          if (parseInt(gen_id) == parseInt(selected[k])) {
            flag = true;
          }
        }
      }

      if (flag) {
        list.push(movieList[i]);
      }
    }
    setData(list);
  }, [movieList, selected]);

  function getSelectedValues() {
    const items = multiselectRef.current.getSelectedItems();

    console.log("items", items);

    console.log(selected, "sselected");

    const newArray = items.map((element) => element.id);
    console.log(newArray);
    setSelected(newArray);
  }
  console.log(data.length);
  // console.log("selec", selected);
  let counter = 18;
  const arr = [...Array(counter).keys()];
  return (
    <div className="container">
      <div className="px-3 min-h-screen">
        <div className="flex lg:flex-row md:flex-row   justify-between items-center  sm:flex-row flex-col text-black  ">
          <div className="justify-center flex py-2 items-center">
            <Heading heading={`${(type ? type : "POPULAR").toUpperCase()}`} />
          </div>
          <div className="py-2  ">
            <Multiselect
              options={options}
              displayValue={"value"}
              selectedValues={genres.selectedValues}
              onSelect={getSelectedValues}
              onRemove={getSelectedValues}
              placeholder="Filter By"
              ref={multiselectRef}
            />
          </div>
        </div>

        {movieList.length > 0 ? (
          <div className="justify-center items-center">
            <div className="grid gap-5 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 ">
              {data && data.length > 0
                ? data.map((movie) => <Card key={movie.id} movie={movie} />)
                : movieList.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                  ))}
            </div>
          </div>
        ) : (
          <div className="justify-center items-center animate-pulse  ">
            <div className="grid gap-5 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 ">
              {arr.map((index) => {
                return (
                  <div id={index} class="rounded bg-slate-200 h-64 !w-48"></div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
