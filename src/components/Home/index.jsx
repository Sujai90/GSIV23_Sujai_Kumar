import React from "react";
import MovieLists from "../MovieListsPage";
import styled from "styled-components";

const MovieListWrapper = styled.div`
  // padding: 0 15px;
  box-sizing: border-box;
`;

const Home = () => {
  return (
    <div>
      <MovieListWrapper>
        <MovieLists />
      </MovieListWrapper>
    </div>
  );
};

export default Home;
