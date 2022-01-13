import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AuthLink,
  SignUpForm,
  SignUpFormContainer,
  SignUpPageContainer,
} from "./authentication-page.styles";
import { generateInputs, initializeForm } from "./authenticate-helpers";

const SignUpPage = ({ type }) => {
  const [input, setInput] = useState(initializeForm());
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setInput(initializeForm(type));
  }, [type]);

  useEffect(() => {}, [input]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (type === "signup") {
      handleSignUp();
    } else {
      handleLogIn();
    }
  };

  const handleSignUp = async () => {
    try {
      const user = await axios({
        method: "post",
        url: "/users/signup",
        data: input,
      });
      console.log(user);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogIn = async () => {
    try {
      const user = await axios({
        method: "post",
        url: "/users/login",
        data: {
          username: input.email,
          password: input.password,
        },
      });

      console.log(user);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SignUpPageContainer>
      <SignUpFormContainer>
        <h1>My Instagram</h1>
        {type === "signup" ? (
          <h2>Sign up to see photos and videos from your friends.</h2>
        ) : null}
        <SignUpForm autoComplete="off">
          {generateInputs(type, input, setInput)}
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
        <AuthLink>
          <p>Have an account?</p>
          <Link to="/accounts/login">Log in</Link>
        </AuthLink>
      ) : (
        <AuthLink>
          <p>Don't have an account?</p>
          <Link to="/accounts/signup">Sign up</Link>
        </AuthLink>
      )}
    </SignUpPageContainer>
  );
};

export default SignUpPage;
