import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import '../../index.css';

const Header = () => {
    return (
        <div className="">
            <div className="headerLeft justify-center items-center flex">
                <Link to="/"><img className="p-1 m-1 h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <input type="text" className="text-sm focus:border-yellow-400 focus:border-2 text-black flex-1 w-96 rounded h-8 outline-none border-slate-300 border p-1  bg-no-repeat bg-right  m-1" placeholder="Search IMDB" />

                <Link to="/movies/popular"><span className="text-white justify-center grid text-base font-bold">Popular</span></Link>
                <Link to="/movies/top_rated"><span className="text-white justify-center grid text-base font-bold">Top Rated</span></Link>
                <Link to="/movies/upcoming"><span className="text-white justify-center grid text-base font-bold">Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header