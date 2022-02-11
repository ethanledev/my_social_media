import React, { useReducer, useState } from "react";
import { GiStripedSun } from "react-icons/gi";

import {
  renderInput,
  renderAuthSwitchMessage,
  reducer,
  INITIAL_STATE,
} from "../../utils/authPage";

import styles from "../../styles/account/[authType].module.css";

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      authType: params.authType,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { authType: "login" } },
      { params: { authType: "signup" } },
    ],
    fallback: false,
  };
};

const AuthPage = ({ authType }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isSubmitDisabled) {
      console.log("submit");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <GiStripedSun className="appLogo" />
        <div className={styles.headerMessage}>
          {`${
            authType === "login" ? "Log in" : "Sign up"
          } to see photos and videos from your friends.`}
        </div>
        <hr />
        <form className={styles.form}>
          {renderInput(authType, state, dispatch)}
          <button
            className={`${styles.submitButton} ${
              isSubmitDisabled && styles.disabled
            }`}
            onClick={(e) => handleSubmit(e)}
          >
            {authType === "login" ? "Log in" : "Sign up"}
          </button>
        </form>
      </div>
      {renderAuthSwitchMessage(authType)}
    </div>
  );
};

export default AuthPage;
