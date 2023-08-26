import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const imageUrl = "https://image.tmdb.org/t/p/original";

const MovieMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px #dfdfdf;
  padding: 10px;
  border-radius: 5px;
`;
const Image = styled.img`
  min-height: 250px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const MovieNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MovieTitle = styled.h4`
  font-weight: 500;
  width: 100%;
  font-size: 0.85rem;
  color: #000;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 10px 0;
  display: block;
  max-width: 200px;
`;
const MovieRating = styled.span`
  font-weight: 400;
  font-size: 0.85rem;
  color: #9b9b9b;
`;
const MovieDescWrapper = styled.p`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 0.75rem;
  width: 100%;
  color: #808080;
  max-width: 240px;
`;

const MovieCard = ({ listOfMovies, movieId }) => {

  return (
    <MovieMainContainer>
      <Link to={`/details/${movieId}`} style={{textDecoration:"none"}}>
        <MovieWrapper>
          <Image src={imageUrl + listOfMovies.backdrop_path} alt="" />
          <MovieNameWrapper>
            <MovieTitle>{listOfMovies.title}</MovieTitle>
            <MovieRating>{listOfMovies.vote_average?.toFixed(1)}</MovieRating>
          </MovieNameWrapper>
          <MovieDescWrapper>
            Description: {listOfMovies.overview}
          </MovieDescWrapper>
        </MovieWrapper>
      </Link>
    </MovieMainContainer>
  );
};

export default MovieCard;
