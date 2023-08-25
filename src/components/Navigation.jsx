import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  Dropdown,
  Image,
  Button,
} from "react-bootstrap";
import "../style/nav.css";
import { fetchGenres } from "./lib/api";
import Loading from "./lib/loading";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setGenre } from "./redux/slice";

function Navigation() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.data.movies);
  const genres = useSelector((state) => state.data.genres);
  useEffect(() => {
    const getCate = async () => {
      try {
        const categories = await fetchGenres();

        const genreIds = movies.map((movie) => movie.genre_ids[0]);
        const filteredList = categories.filter((cate) =>
          genreIds.includes(cate.id)
        );
        dispatch(setGenre(filteredList));
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    if (genres.length === 0) {
      getCate();
    }
  }, [genres]);
  if (genres == undefined) {
    return <Loading />;
  }

  const handleCategorySelect = (categoryName) => {
    dispatch(setCategory(categoryName));
  };

  return (
    <Navbar variant="dark" expand="md" className="px-4 transparent-navbar">
      <Navbar.Brand href="/home">
        <Image src="/images/logo2.png" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-between"
      >
        <Nav className="mr-auto nav-text">
          <NavItem className=" nav-text">
            <Nav.Link href="/home">Home</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="#">Show times</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="#">About us</Nav.Link>
          </NavItem>
          <NavDropdown title="Category" id="basic-nav-dropdown">
            <Dropdown.Item href="#" onClick={() => handleCategorySelect(0)}>
              All
            </Dropdown.Item>
            {genres.map((cate) => {
              return (
                <Dropdown.Item
                  key={cate.id}
                  href="#"
                  onClick={() => handleCategorySelect(cate.id)}
                >
                  {cate.name}
                </Dropdown.Item>
              );
            })}
          </NavDropdown>
        </Nav>
        <Nav>
          <NavItem>
            <Button className="btn btn-outline-light px-4 btn-desc bg-dark">
              Login
            </Button>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
