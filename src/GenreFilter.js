import React from "react";

function GenreFilter(props) {
  const handleGenreSelect = (genre) => {
    console.log(`User clicked ${genre} genre`);
    props.onGenreSelect(genre);
  };

  return (
    <div className="genres">
      <p>Filter by Genre</p>
      {props.genres.map((genre) => (
        <button
          className="button"
          key={genre}
          onClick={() => handleGenreSelect(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
export default GenreFilter;
