import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0.5rem 1rem;
  box-shadow: 0 4px 8px #808080;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const Title = styled.h2`
  color: #000;
`;
const HomeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: inherit;
`;

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <Title>Movie Details</Title>
        <Link to="/">
          <HomeButton>
            <HomeIcon style={{ color: "#000" }} />
          </HomeButton>
        </Link>
      </HeaderContainer>
    </div>
  );
};

export default Header;
