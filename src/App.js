import React ,{useEffect, useState} from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";


//  key : 7a73744f

const API_URL ='http://www.omdbapi.com/?i=tt3896198&apikey=7a73744f'
const movie = {
  "Title": "Batman Returns",
  "Year": "1992",
  "imdbID": "tt0103776",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"
}

 const App = () => {
  const [movies,setMovies]= useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();


    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <div  className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
        placeholder="search Movie"
        value={searchTerm}
        onChange={(e)=>{ setSearchTerm(e.target.value)

        }}
        />
  
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>


      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  )
}

export default App