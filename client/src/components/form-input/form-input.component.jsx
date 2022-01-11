import React from "react";
import {
  FormInputContainer,
  InputContainer,
  InputLabel,
  ShrinkLabel,
} from "./form-input.styles";

const FormInput = ({ onChange, ...otherProps }) => (
  <FormInputContainer>
    <InputContainer onChange={onChange} {...otherProps} />
    {otherProps.value.length ? (
      <ShrinkLabel>{otherProps.label}</ShrinkLabel>
    ) : (
      <InputLabel>{otherProps.label}</InputLabel>
    )}
  </FormInputContainer>
);

export default FormInput;
