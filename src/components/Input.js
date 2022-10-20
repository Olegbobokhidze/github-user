import React from "react";
import styled from "styled-components";
import Search from "../search.png";

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 327px;
  height: 60px;
  border-radius: 60px;
  background-color: #fefefe;
  background-color: ${(props) => props.light.color};
  box-shadow: 0px 5px 30px -10px #4660bb;
  box-shadow: ${(props) => props.light.boxShadow};
  @media screen and (min-width: 768px) {
    width: 573px;
    height: 69px;
  }
  @media screen and (min-width: 1440px) {
    width: 730px;
    height: 69px;
  }
`;
const InputField = styled.input`
  font-family: "Space Mono", monospace;
  color: #4b6a9b;
  color: ${(props) => props.light.textColor};
  width: 105px;
  height: 25px;
  border: none;
  font-size: 13px;
  background-color: #fefefe;
  background-color: ${(props) => props.light.color};
  ::placeholder {
    color: #4b6a9b;
    color: ${(props) => props.light.textColor};
  }
  &:focus {
    outline: none;
    border: 0;
  }
  @media screen and (min-width: 768px) {
    width: 254px;
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;
const Button = styled.button`
  font-family: "Space Mono", monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #0079ff;
  font-size: 14px;
  width: 84px;
  height: 46px;
  border-radius: 10px;
  margin-right: 15px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #60abff;
  }
  @media screen and (min-width: 768px) {
    width: 106px;
    height: 50px;
    font-size: 16px;
  }
`;
const SearchImage = styled.img`
  width: 17px;
  height: 17px;
  margin-left: 15px;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    width: 20px;
    font-size: 20px;
  }
`;
const ErrorP = styled.p`
  position: relative;
  top: 0px;
  left: 5px;
  color: #f74646;
  font-weight: 700;
  font-size: 10px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
    top: 0px;
    left: 20px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 15px;
    top: 0px;
    left: 80px;
  }
`;
const InputSearchDiv = styled.div``;
export default function Input({ light, setUsername, handleSubmit, found }) {
  return (
    <InputBox light={light}>
      <InputSearchDiv>
        <SearchImage src={Search} alt="search" />
        <InputField
          light={light}
          type="text"
          placeholder="Search GitHub username…"
          onChange={(e) => setUsername(e.target.value)}
        />
      </InputSearchDiv>
      <ErrorP>{found}</ErrorP>
      <Button onClick={handleSubmit}>Search</Button>
    </InputBox>
  );
}
