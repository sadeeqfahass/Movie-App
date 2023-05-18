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
        setMovieData(data.results); // Assuming setMovieData is a state setter function

        console.log(data.results); // Logging the data to verify the result
        console.log(movieData); // Logging the data to verify the result
      } catch (error) {
        console.error(error);
      }
    }

    getMovies();
  }, []);

  const movies = movieData.map((item) => {
    <div className="card">
      <img src={item.backdrop_path} alt="" />
      <div className="text">
        <p className="movie-name">{item.title}</p>
        <p className="movie-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </p>
        <p className="movie-rating">7.2 / 10</p>
      </div>
    </div>;
  });


  return (
    <div className="content">
      <Nav />
      <h1 className="content-title">All Movies</h1>
      <div className="content-container">{movies}</div>
    </div>
  );
}

export default Content;
