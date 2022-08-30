import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import { Declaration } from "postcss";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  let constMovie=[...movieList]
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
  const genres = {
    28: "Action",
    12: "Adventure",
    14: "Fantasy",
    16: "Animation",
    878: "Science Fiction",
    53: "Thriller",
    18: "Drama",
    35: "Comedy",
    27: "Horror",
    10749: "Romance",
    9648: "Mystery",
  };

  let flag = false;
  let list = [];
  let ans;
  setTimeout(() => {
    for (var i = 0; i < movieList.length; i++) {
      let flag = false;
      const max = movieList[i];
      // console.log("max",max)
      for (var j = 0; j < max.genre_ids.length; j++) {
        const gen_id = max.genre_ids[j];
        console.log("genid", gen_id);
        for (var k = 0; k < selected.length; k++) {
          console.log(selected[k]);
          if (parseInt(gen_id) == parseInt(selected[k])) {
            flag = true;
            console.log(flag);
            console.log("list in",list);
          }
        }
      }
      console.log("down", flag);
      if (flag) {
        list.push(movieList[i]);
      }
    }
    setTimeout(()=>{
console.log("I'm inside setTIme out ", list)
// setMovieList([...list]);
console.log(movieList,"movielist")

    },5000)
  }, 3000);
  console.log("mylist", list);

  

  function getMultipleSelectedValue() {
    var x = document.getElementById("alpha");
    for (var i = 0; i < x.options.length; i++) {
      if (x.options[i].selected == true) {
        setSelected([...selected, x.options[i].value]);
      }
    }
    constMovie=[...list]



  }

  return (
    <div className="container">
      <div className="">
        <div className="flex text-black">
          <div>
            <h2 className="font-bold text-3xl py-5 text-yellow-400">
              {(type ? type : "POPULAR").toUpperCase()}
            </h2>
          </div>
          <div className="py-5 pl-5 ">
            <span className="text-white py-5">Filter by </span>

            <select
              className="rounded border px-2 w-48 py-1 outline-none border-gray-300  "
              name="sort"
              id="alpha"
              onChange={() => {
                getMultipleSelectedValue();
              }}
              multiple
            >
              <option value="" selected="selected">
                Filter By
              </option>
              <option value="16">Animation</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Action">Action</option>
              <option value="Horror">Horror</option>
              <option value="Thriller">Thriller</option>
              <option value="Family">Family</option>
              <option value="Comedy">Comedy</option>
              <option value="Adventure">Adventure</option>
              <option value="Romance">Romance</option>
              <option value="Drama">Drama</option>
              <option value="Crime">Crime</option>
              <option value="Fantasy">Fantasy</option>
              <option value="History">History</option>
            </select>
          </div>
        </div>
        <div className="">
          {
          constMovie.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
