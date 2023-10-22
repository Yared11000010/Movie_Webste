import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";
import MovieList from "../pages/MovieList";
import PageNotFound from "../pages/PageNotFound";
import Search from "../pages/Search";

const AllRouter = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<MovieDetail />} />
      <Route path="movies/:id" element={<MovieList />} />
      <Route path="movies/popular" element={<MovieList />} />
      <Route path="movies/top" element={<MovieDetail />} />
      <Route path="movies/upcoming" element={<MovieDetail />} />
      <Route path="search" element={<Search />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  );
};

export default AllRouter;
