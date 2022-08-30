import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";

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
  // const genres = {
  //   28: "Action",
  //   12: "Adventure",
  //   14: "Fantasy",
  //   16: "Animation",
  //   878: "Science Fiction",
  //   53: "Thriller",
  //   18: "Drama",
  //   35: "Comedy",
  //   27: "Horror",
  //   10749: "Romance",
  //   9648: "Mystery",
  //   80: "Crime",
  //   10751: "Family",
  // };

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

  // function getMultipleSelectedValue(value) {
    
  //   var x = document.getElementById("alpha");
  //   const index = selected.indexOf(value);
  //   if (index > -1) {
      
  //     selected.splice(index);  
  //     console.log("selected", selected);
  //   }

   

  //   for (var i = 0; i < x.options.length; i++) {
  //     if (x.options[i].selected == true) {
  //       const index = selected.indexOf(value);
  //       if (index > -1) {
          
  //         selected.splice(index, 1);  
  //         console.log("selected", selected);
  //       }
  //       else setSelected([...selected, x.options[i].value]);
  //     }
  //   }
  // }
  console.log(selected,"selected valuess");
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
            {/* <span className="text-white py-5">Filter by </span> */}

            <select
              className="rounded border px-2 w-48 py-1 outline-none border-gray-300  "
              name="sort"
              id="alpha"
              // onChange={(e) => {
              //   getMultipleSelectedValue(e.target.value);
              //   console.log(e.target.value);
              // }}
              onClick={(e) => {
                const index = selected.indexOf(e.target.value);
                if (index > -1) {      
                 selected.splice(index);  }
               else setSelected([...selected,e.target.value]) 
                console.log(e.target.value)}}
              multiple
            >
              <option value="" selected="selected">
                Filter By
              </option>
              <option value="16">Animation</option>
              <option value="878">Science Fiction</option>
              <option value="28">Action</option>
              <option value="27">Horror</option>
              <option value="53">Thriller</option>
              <option value="10751">Family</option>
              <option value="35">Comedy</option>
              <option value="12">Adventure</option>
              <option value="10749">Romance</option>
              <option value="18">Drama</option>
              <option value="80">Crime</option>
              <option value="14">Fantasy</option>
              <option value="9648">Mystery</option>
            </select>
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
