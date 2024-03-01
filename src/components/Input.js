import React, { useState } from "react";
let password = ""; //storing password variable as a seperate to check the confirm password matches with the password

const Input = ({
  placeholder,
  type,
  activity,
  isValid,
  onValidation,
  tooltip,
}) => {
  console.log(isValid);
  const [value, setValue] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleChange(event) {
    const currVal = event.target.value;
    setValue(currVal);

    if (activity === "mail") {
      checkEmail(currVal);
    } else if (activity === "password") {
      checkPassword(currVal);
      password = currVal; //updating password variable to match cnfrm password
    } else {
      checkConfirmPassword(currVal);
    }
  }

  function checkEmail(currVal) {
    const isValidEmail = emailRegex.test(currVal);
    onValidation(isValidEmail);
  }

  function checkPassword(currVal) {
    const isValidPassword = currVal.length >= 8;
    onValidation(isValidPassword);
  }

  function checkConfirmPassword(currVal) {
    const isValidConfirmPassword = password === currVal;
    onValidation(isValidConfirmPassword);
  }

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        style={{
          border: `${isValid ? "2px solid green" : "2px solid red"}`,
        }}
      />
      {!isValid && <span>{tooltip}</span>}
    </div>
  );
};

export default Input;
