import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { lazy } from 'react';
import { PAGE_NAMES } from './router/paths';
import { MainLayout } from './Layouts/MainLayout';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';

const Homepage = lazy(() => import('pages/Homepage/Homepage'));
const ErrorPage = lazy(() => import('pages/Error/Error'));
const Movie = lazy(() => import('pages/Movie/Movie'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path={PAGE_NAMES.homepage} element={<MainLayout />}>
        <Route index path={PAGE_NAMES.homepage} element={<Homepage />} />
        <Route path={PAGE_NAMES.movies} element={<Movie />} />
        <Route path={PAGE_NAMES.movies_ID} element={<MovieDetails />}>
          <Route path={PAGE_NAMES.cast} element={<Cast />} />
          <Route path={PAGE_NAMES.reviews} element={<Reviews />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
