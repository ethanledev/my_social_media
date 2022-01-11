import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  LogInLink,
  SignUpForm,
  SignUpFormContainer,
  SignUpPageContainer,
} from "./authentication-page.styles";
import { generateInputs, initializeForm } from "./helpers";

const SignUpPage = ({ type }) => {
  const [input, setInput] = useState(initializeForm());
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    setInput(initializeForm(type));
  }, [type]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (type === "signup") {
      handleSignUp();
    }
  };

  const handleSignUp = async () => {
    const user = await axios({
      method: "post",
      url: "/signup",
      data: input,
    });
    console.log(user);
  };

  return (
    <SignUpPageContainer>
      <SignUpFormContainer>
        <h1>My Instagram</h1>
        {type === "signup" ? (
          <h2>Sign up to see photos and videos from your friends.</h2>
        ) : null}
        <SignUpForm>
          {generateInputs(input, setInput)}
          <button
            disabled={isButtonDisabled}
            type="submit"
            onClick={(event) => handleSubmit(event)}
          >
            {type === "signup" ? "Sign up" : "Log in"}
          </button>
        </SignUpForm>
      </SignUpFormContainer>
      {type === "signup" ? (
        <LogInLink>
          <p>Have an account?</p>
          <Link to="/accounts/login">Log in</Link>
        </LogInLink>
      ) : (
        <LogInLink>
          <p>Don't have an account?</p>
          <Link to="/accounts/signup">Sign up</Link>
        </LogInLink>
      )}
    </SignUpPageContainer>
  );
};

export default SignUpPage;
