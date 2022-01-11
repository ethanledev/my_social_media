import styled from "styled-components";
import * as global from "../../global-styles";

export const SignUpPageContainer = styled.div`
  width: 400px;
  margin: 200px auto;
`;

export const SignUpFormContainer = styled.div`
  background-color: white;
  border: 1px solid ${global.borderColor};
  text-align: center;
  margin-bottom: 10px;
  padding: 5px 50px;

  h1 {
    font-size: 35px;
  }

  h2 {
    font-size: 18px;
    color: grey;
    font-weight: 500;
  }
`;

export const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  button {
    background-color: ${global.buttonBlueColor};
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px;
    margin: 20px 0 30px 0;
    font-size: 15px;
    border-radius: 5px;
    font-weight: bold;
  }

  button:disabled {
    cursor: default;
    background-color: ${global.disabledButtonBlueColor};
  }
`;

export const LogInLink = styled.div`
  background-color: white;
  border: 1px solid ${global.borderColor};
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: ${global.buttonBlueColor};
    margin-left: 5px;
  }
`;
