import React from "react";
import axios from "axios";
// import Movie from "./components/Movie";
import Detail from "./components/Detail";
import MainTitle from "./components/MainTitle";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    isSelect: true,
    movies: [],
    selectMovie: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    this.setState({ movies, isLoading: false });
  };

  getSelectMovie = (imgId) => {
    this.state.movies.map((movie) => {
      if (movie.id === Number(imgId)) {
        var movieDetail = new Array();
        movieDetail.push(movie);
        this.setState({ selectMovie: movieDetail, isSelect: false });
      }
    });
  };

  selectMovie = (event) => {
    this.setState({ isSelect: false });
    this.getSelectMovie(event.target.id);
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
    this.getMovies();
  }

  render() {
    const { isLoading, isSelect, movies, selectMovie } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies__board">
            <div className="site__title">
              <h1>Get Movie Data</h1>
            </div>
            <div className="main__silder">
              <div className="main__title">
                {movies.map((movie) => (
                  <MainTitle
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster={movie.large_cover_image}
                    clickHander={this.selectMovie}
                  />
                ))}
              </div>
            </div>
            {isSelect ? (
              <div className="site__click">
                <h1>Plz Click Posters</h1>
              </div>
            ) : (
              <div className="movie__detail">
                {selectMovie.map((movie) => (
                  <Detail
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    );
  }
}

export default App;
