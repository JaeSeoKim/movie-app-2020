import React from 'react';
import axios from "axios";
import Movie from "./Movie"

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async() =>{
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    console.log(movies);
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;
    return <div>
      {isLoading ? <h1>Now Loading...</h1> : movies.map(movie =>(
        <Movie 
          id={movie.id}
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
          poster={movie.medium_cover_image}  
        />
      ))}
    </div>
  }
}

export default App;
