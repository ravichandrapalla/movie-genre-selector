import React from "react";
import "./App.css";
function MovieList(props) {
  return (
    <div className="table-div">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {props.movies.map((movie) => (
            <tr key={movie.title}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
