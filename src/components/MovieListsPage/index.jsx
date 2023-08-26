import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { API_KEY } from "../../App.js";
import MovieCard from "../MovieCard/index.jsx";
import Loader from "../Loader/index.jsx";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 20px 15px;
  box-shadow: 0 4px 8px #808080;
  box-sizing: border-box;
`;

const SearchBarWrapper = styled.div`
  position: relative;
`;

const SearchBar = styled.input`
  padding: 1rem 3rem;
  border: none;
  border-radius: 4px;
  outline: none;
  width: 100%;
  max-width: 500px;
  background-color: #9b9b9b;
  @media (max-width: 512px) {
    width: 175px;
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  transform: translate(16px, 12px);
`;

const HomeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: inherit;
`;

const MovieListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  // justify-content: center;
  gap: 15px;
  padding: 15px 15px;
  box-sizing: border-box;
`;
const MovieListWrapper = styled.div`
  flex: 1 1 calc(100% / 5 - 60px / 5);
`;

const MovieLists = () => {
  const [movieLists, setMovieLists] = useState();
  const [loading, setLoading] = useState(true);
  const [listOfMovies, setListOfMovies] = useState();
  const [searchMovie, setSearchMovie] = useState();
  // const [timeOutSearch, setTimeOutSearch] = useState();

  const fetchSearchData = async (keyWord) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${keyWord}&api_key=${API_KEY}`
    );
    // console.log("RESPONSE:", response.data.results)
    setListOfMovies(response.data.results);
  };

  const handleText = (event) => {
    // clearTimeout(timeOutSearch);
    setSearchMovie(event.target.value);
    // const timeOutForApi = setTimeout(
    //   () => fetchSearchData(event.target.value),
    //   500
    // );
    setTimeout(() => {
      fetchSearchData(event.target.value)
      setLoading(false)
    },500)
    // setTimeOutSearch(timeOutForApi);
  };

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
      .then((response) => {
        // console.log("Response", response.data.results)
        setTimeout(() => {
          setMovieLists(response.data.results);
          setLoading(false);
        }, 2000);
      });
  }, []);

  return (
    <div>
      <HeaderContainer>
        <SearchBarWrapper>
          <SearchIconWrapper>
            <SearchIcon style={{ color: "#4a4a4a" }} />
          </SearchIconWrapper>
          <SearchBar
            type="text"
            placeholder="Search..."
            value={searchMovie}
            onChange={handleText}
          />
        </SearchBarWrapper>
        <HomeButton>
          <HomeIcon style={{ color: "#000" }} />
        </HomeButton>
      </HeaderContainer>

      <MovieListContainer>
        {loading ? (
          <Loader />
        ) : searchMovie ? (
          listOfMovies?.map((movie) => (
            <MovieListWrapper key={movie.id}>
              <MovieCard listOfMovies={movie} movieId={movie.id} />
            </MovieListWrapper>
          ))
        ) : (
          movieLists?.map((movie) => (
            <MovieListWrapper key={movie.id}>
              <MovieCard listOfMovies={movie} movieId={movie.id} />
            </MovieListWrapper>
          ))
        )}
      </MovieListContainer>
    </div>
  );
};

export default MovieLists;
