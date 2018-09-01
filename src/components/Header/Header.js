import React, { Component } from "react";
import styled from "styled-components";
import App from "../../App";

const StyledHeader = styled.div`
  display: flex;
  background-color: #84aeb5;
  height: 12vh;
  font-size: 30px;
  color: #50dd0f;
  justify-content: center;
  align-items: center;
  font-family: "Pacifico", cursive;
`;

const ColorOne = styled.div`
  color: #dd0f0f;
`;

export default class Header extends Component {
  render() {
    return (
      <div>
        <StyledHeader>
          Whee
          <ColorOne>lies.</ColorOne>
        </StyledHeader>
      </div>
    );
  }
}
