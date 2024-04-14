import { useState } from "react";

import NavBar from "./assets/components/NavBar";
import Main from "./assets/components/Main";

import Box from "./assets/components/Box";

import Logo from "./assets/components/Logo";
import Search from "./assets/components/Search";
import Results from "./assets/components/Results";

import MovieList from "./assets/components/MovieList";

import WatchedSummary from "./assets/components/WatchedSummary";
import WhatchedMovieList from "./assets/components/WhatchedMovieList";

import { tempMovieData } from "./assets/data";
import { tempWatchedData } from "./assets/data";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <Results movies={movies} />
      </NavBar>
      <Main movies={movies}>
        <Box movies={movies}>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WhatchedMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
