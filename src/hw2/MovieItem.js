import React from "react";
import './MoviesList.css'
export default function MovieItem(props) {
  //   console.log("props::", props);
  // detruct
  const { backdrop_path, title, overview, vote_count } = props;
  return (
    <div className="container" 
         style={
            {textAlign: 'center'}
        }>
      <img
        style={{ width: "200px" }}
        src={"https://image.tmdb.org/t/p/w500/" + backdrop_path}
        alt=""
      />
      <p className="title">Title: {title}</p>
      <div className="vote">Vote count: {vote_count}</div>
      <div className="overview">Overview: {overview}</div>

      <p>--------------------------------------------------</p>
    </div>
  );
}