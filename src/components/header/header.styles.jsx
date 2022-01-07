import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;

  h1 {
    font-size: 30px;
    margin: 0;
    cursor: pointer;
  }
`;

export const HeaderContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinks = styled.div`
  display: flex;
  font-size: 25px;
  align-items: center;

  svg {
    margin-right: 20px;
    cursor: pointer;
  }
`;
