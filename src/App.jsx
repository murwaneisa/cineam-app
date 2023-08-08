import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button } from "react-bootstrap";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MovieDetails from "./pages/MovieDetails";
import { useDispatch } from "react-redux";
import { fetchData } from "./components/lib/api";
import { screening } from "./components/lib/helper";
import { setMovies, setScreens } from "./components/redux/slice";

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
        const screenings = screening(movies);
        dispatch(setMovies(result.data.results));
        dispatch(setScreens(screenings));
        console.log("the screening array", screenings);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovies();
  }, []);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
