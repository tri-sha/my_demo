import React, { useState } from "react";
import styled from "styled-components";

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 30px 60px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 350px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
`;

Button.defaultProps = {
  theme: "blue"
};

function clickMe() {
  alert("You clicked me!");
}

export default function App() {
  return (
    <>
      <div>
        <Button onClick={clickMe}>Register as Student</Button>
        <Button theme="pink" onClick={clickMe}>
          Resgister as Teacher
        </Button>
      </div>
    </>
  );
}
