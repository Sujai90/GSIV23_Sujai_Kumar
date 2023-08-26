import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../App";
import Loader from "../Loader";

const imageUrl = "https://image.tmdb.org/t/p/original";

const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
`;

const MainDetailsContainer = styled.div`
  padding: 1rem;
  gap: 2rem;
  display: flex;
  width: 100%
  flex-wrap: wrap;
  box-sizing: border-box;

  @media (max-width: 512px){
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 991px){
    flex-direction: column;
  }
`;
const ImageWrapper = styled.div`
  flex-basis: 20%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const InnerDetailsContainer = styled.div`
  flex-basis: 80%;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const MovieTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin:0;
`;
const MovieRating = styled.span`
  color: #9b9b9b;
`;
const OtherInfoWrapper = styled.div`
  display: flex;
  padding-top: 1rem;
`;
const MovieInfo = styled.span`
  font-size: 1rem;
`;
const DescWrapper = styled.div`
  padding-top: 1rem;
`;
const DescOverview = styled.div`
  font-size: 1rem;
  line-height: 1.5;
`;

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
      .then((response) => {
        // console.log("data::", response.data)
        setTimeout(() => {
          setMovieDetails(response.data);
          setLoading(false);
        }, 2000);
      });
  }, [movieId]);

  const dateString = movieDetails?.release_date;
  const date = new Date(dateString);
  const year = date.getFullYear();

  return (
    <div>
      <Header />
      {loading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <MainDetailsContainer>
          <ImageWrapper>
            <Image src={imageUrl + movieDetails?.backdrop_path} alt="" />
          </ImageWrapper>
          <InnerDetailsContainer>
            <TitleWrapper>
              <MovieTitle>{movieDetails?.title}</MovieTitle>
              <MovieRating>
                ({movieDetails?.vote_average.toFixed(1)})
              </MovieRating>
            </TitleWrapper>
            <OtherInfoWrapper>
              <MovieInfo>
                {year} | {`${movieDetails?.runtime} Mins`}
              </MovieInfo>
            </OtherInfoWrapper>
            <DescWrapper>
              <DescOverview>{movieDetails?.overview}</DescOverview>
            </DescWrapper>
          </InnerDetailsContainer>
        </MainDetailsContainer>
      )}
    </div>
  );
};

export default MovieDetails;
