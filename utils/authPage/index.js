import Link from "next/link";

import styles from "../../styles/account/[authType].module.css";

export const ON_CHANGE = "ON_CHANGE";

export const INITIAL_STATE = {
  email: "",
  username: "",
  displayName: "",
  password: "",
  confirmPassword: "",
};

export const reducer = (state, action) => {
  const { type, field, value } = action;
  switch (type) {
    case ON_CHANGE:
      return {
        ...state,
        [field]: value,
      };

    default:
      throw new Error();
  }
};

export const renderInput = (authType, state, dispatch) => {
  let fields = {
    email: {
      inputType: "email",
      label: "Email",
    },
    password: {
      inputType: "password",
      label: "Password",
    },
  };

  if (authType === "signup") {
    fields = {
      ...fields,
      username: {
        inputType: "text",
        label: "Username",
      },
      displayName: {
        inputType: "text",
        label: "Display Name",
      },
      confirmPassword: {
        inputType: "password",
        label: "Confirm Password",
      },
    };
  }

  return Object.keys(fields).map((field) => {
    const { inputType, label } = fields[field];
    return (
      <div key={field} className={styles.inputField}>
        <div
          className={`${
            state[field].length === 0 ? styles.label : styles.shrinkLabel
          }`}
        >
          {label}
        </div>
        <input
          type={inputType}
          name={field}
          value={state[field]}
          onChange={(e) =>
            dispatch({
              type: ON_CHANGE,
              field,
              value: e.target.value,
            })
          }
        />
      </div>
    );
  });
};

export const renderAuthSwitchMessage = (authType) => {
  if (authType === "login") {
    return (
      <div className={styles.authSwitchMessage}>
        {"Don't have an account? "}
        <Link href="/account/signup">
          <a className={styles.authSwitchLink}>Sign up</a>
        </Link>
      </div>
    );
  } else {
    return (
      <div className={styles.authSwitchMessage}>
        {"Have an account? "}
        <Link href="/account/login">
          <a className={styles.authSwitchLink}>Log in</a>
        </Link>
      </div>
    );
  }
};
