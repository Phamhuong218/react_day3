import "./App.css";
import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
/*
- call api:
  - call = fetch
    - rule: component render xong (mounted) -> bắt đầu call api
  - store data: useState(): https://reactjs.org/docs/hooks-reference.html#usestate
- render list item
*/
function MoviesList() {
  // store data
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  // hook - didMount = useEffect(() => {}, []);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=85ac6156be17ea981b54c406910fdc7a&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => {
        console.log("Error::", err);
      });
  }, []);

  // updating: call lại api khi mà pageNumber thay đổi
  useEffect(() => {
    
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=85ac6156be17ea981b54c406910fdc7a&page=${pageNumber}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => {
        console.log("Error::", err);
      });
  }, [pageNumber]);

  return (
    <div className="App">
      {movies.length}
      {/* // map for render list element */}
      {movies.map((value, index) => {
        // console.log(`item at::`, index, value);
        return <MovieItem {...value} />;
      })}

      <ul style={{ display: "flex", gap: "12px" }}>
        {/* // click -> change page number -> call api -> render */}
        {Array(5)
          .fill(0)
          .map((k, i) => (
            <li
              style={{
                background: pageNumber === i + 1 ? "yellow" : "",
              }}
              onClick={() => {
                setPageNumber(i + 1);
              }}
            >
              {i + 1}
            </li>
          ))}

        {/* <li
          onClick={() => {
            setPageNumber(1);
          }}
        >
          1
        </li>
        <li
          onClick={() => {
            setPageNumber(2);
          }}
        >
          2
        </li>
        <li
          onClick={() => {
            setPageNumber(3);
          }}
        >
          3
        </li>
        <li
          onClick={() => {
            setPageNumber(4);
          }}
        >
          4
        </li>
        <li
          onClick={() => {
            setPageNumber(5);
          }}
        >
          5
        </li> */}
      </ul>
    </div>
  );
}

export default MoviesList;