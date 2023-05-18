import React, { useEffect, useState } from "react";
import Nav from "./Nav";

function Content() {
  const [movieData, setMovieData] = useState([]);
  const apiKey = "6f77cbfe9edaa7a0cb4bbf0345b3394c";

  useEffect(() => {
    async function getMovies() {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovieData(data)

        console.log(data.results);
        console.log(movies);
      } catch (error) {
        console.error(error);
      }
    }

    getMovies();
  }, []);

  return (
    <div className="content">
      <Nav />
      <h1 className="content-title">All Movies</h1>
      <div className="content-container">
        <div className="card">
          <img src="https://picsum.photos/200/300" alt="" />
          <div className="text">
            <p className="movie-name">Spider Man</p>
            <p className="movie-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
            <p className="movie-rating">7.2 / 10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
