import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";
import MovieList from "../pages/MovieList";
import PageNotFound from "../pages/PageNotFound";
import Search from "../pages/Search";

const AllRouter = () => {
  return (
    <div className="dark:bg-darkbg">
    <Routes>
      <Route path="/" element={<MovieList apiPath="movie/now_playing"  />}  />
      <Route path="movies/:id" element={<MovieList />} />
      <Route path="movies/popular" element={<MovieList apiPath="movie/popular" />}  />
      <Route path="movies/top" element={<MovieList apiPath="movie/top_rated"  />}  />
      <Route path="movies/upcoming" element={<MovieList  apiPath="movie/upcoming" />}  />
      <Route path="search" element={<Search apiPath="search/movie" />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </div>
  );
};

export default AllRouter;
