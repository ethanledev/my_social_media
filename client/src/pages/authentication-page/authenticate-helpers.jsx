import FormInput from "../../components/form-input/form-input.component";

const capitalizeFirstLetter = (str) => {
  return str === "confirmPassword"
    ? "Confirm Password"
    : str[0].toUpperCase() + str.substring(1);
};

export const generateInputs = (authType, input, setInput) => {
  let inputs = [];

  for (let field in input) {
    let type = undefined;
    if (field === "email") {
      type = "email";
    } else if (field === "password" || field === "confirmPassword") {
      type = "password";
    } else {
      type = "text";
    }
    inputs.push(
      <FormInput
        key={`authentication_input_${authType}_${field}`}
        type={type}
        name={field}
        value={input[field]}
        label={capitalizeFirstLetter(field)}
        onChange={(event) =>
          setInput((state) => ({
            ...state,
            [field]: event.target.value,
          }))
        }
      />
    );
  }

  return inputs;
};

export const initializeForm = (type) => {
  if (type === "signup") {
    return {
      name: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    };
  } else {
    return {
      email: "",
      password: "",
    };
  }
};
