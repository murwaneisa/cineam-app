import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MovieDetails from "./pages/MovieDetails";
import { Provider, useDispatch } from "react-redux";
import { fetchData, getSeats } from "./components/lib/api";
import { screening } from "./components/lib/helper";
import { setMovies, setScreens, setSeats } from "./components/redux/slice";
import Booking from "./pages/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigation />
        <Outlet />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/movies/:genreId/:id",
        element: <MovieDetails />,
      },
      {
        path: "/booking/:auditoriumId/:id",
        element: <Booking />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const result = await fetchData();
        const movies = result.data.results;
        const screenings = await screening(movies);
        const seats = await getSeats();
        console.log("the seats: ", movies);
        dispatch(setSeats(seats));
        dispatch(setMovies(result.data.results));
        dispatch(setScreens(screenings));
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovies();
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
