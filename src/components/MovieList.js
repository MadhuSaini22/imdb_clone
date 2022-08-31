import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";

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
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
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
      // console.log("max",max)
      for (var j = 0; j < max.genre_ids.length; j++) {
        const gen_id = max.genre_ids[j];
        // console.log("genid", gen_id);
        for (var k = 0; k < selected.length; k++) {
          // console.log(selected[k]);
          if (parseInt(gen_id) == parseInt(selected[k])) {
            flag = true;
            // console.log(flag);
            // console.log("list in", list);
          }
        }
      }
      // console.log("down", flag);
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
  // console.log("selec", selected);

  return (
    <div className="container">
      <div className="h-screen">
        <div className="flex text-black ">
          <div>
            <h2 className="font-bold text-3xl py-5 text-yellow-400">
              {(type ? type : "POPULAR").toUpperCase()}
            </h2>
          </div>
          <div className="py-5 pl-5 ">
            {/* <span className="text-white py-5">Filter by </span> */}

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
        <div className="">
          {data && data.length > 0
            ? data.map((movie) => <Card key={movie.id} movie={movie} />)
            : movieList.map((movie) => <Card key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
