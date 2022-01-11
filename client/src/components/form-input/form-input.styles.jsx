import styled, { css } from "styled-components";
import * as global from "../../global-styles";

const getShrinkLabel = css`
  top: -20px;
  left: 5px;
  font-size: 12px;
  color: ${global.buttonBlueColor};
  position: absolute;
`;

export const FormInputContainer = styled.div`
  position: relative;
  margin-bottom: 45px;

  input[type="password"] {
    letter-spacing: 3px;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  left: 0px;
  top: -5px;
  font-size: 16px;
  pointer-events: none;
  transition: 300ms ease all;
  color: grey;
`;

export const ShrinkLabel = styled.label`
  ${getShrinkLabel}
`;

export const InputContainer = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid ${global.borderColor};
  width: 100%;
  padding: 0 10px;
  outline: none;
  display: block;
  font-size: 18px;

  &:focus ~ ${InputLabel} {
    ${getShrinkLabel}
  }
`;
