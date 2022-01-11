import styled from "styled-components";
import * as global from "../../global-styles";

export const SearchBarContainer = styled.div`
  height: 30px;
  width: 250px;
  background-color: ${global.backgroundColor};
  border: none;
  outline: none;
  padding: 0px 10px;
  border: 1px solid ${global.borderColor};
  border-radius: 10px;
  display: flex;
  align-items: center;

  input {
    width: 90%;
    border: none;
    outline: none;
    background-color: inherit;
    font-size: 15px;
    margin-left: 5px;
  }

  svg {
    color: ${global.iconColor};
  }
`;
