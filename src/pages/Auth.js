import React, { useState } from "react";
import Input from "../components/Input";
const Auth = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

function Form() {
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  function handleEmailValidation(isValid) {
    setEmailValid(isValid);
  }

  function handlePasswordValidation(isValid) {
    setPasswordValid(isValid);
  }

  function handleConfirmPasswordValidation(isValid) {
    setConfirmPasswordValid(isValid);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (emailValid && passwordValid && confirmPasswordValid) {
      // All inputs are valid, proceed with form submission
      alert("Form submitted successfully!");
    } else {
      // Display error or prevent form submission
      alert("Form submission failed. Please fill in all fields correctly.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder={"email"}
        type={"text"}
        activity={"mail"}
        isValid={emailValid}
        onValidation={handleEmailValidation}
        tooltip="Please enter a valid email address."
      />
      <Input
        placeholder={"password"}
        type={"password"}
        activity={"password"}
        isValid={passwordValid}
        onValidation={handlePasswordValidation}
        tooltip="Password must be at least 8 characters long."
      />
      <Input
        placeholder={"confirm password"}
        type={"password"}
        activity={"cnfrmpass"}
        isValid={confirmPasswordValid}
        onValidation={handleConfirmPasswordValidation}
        tooltip="The password you entered does not match the original. Please try again."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// function Form({ checkAuth }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [mailValid, setMailValid] = useState(false);
//   const [isPasswordLength, setIsPasswordLength] = useState(false);
//   const [isPasswordSame, setIsPasswordSame] = useState(false);

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   function checkEmail(event) {
//     const val = event.target.value;
//     setEmail(val);

//     // console.log(emailRegex.test(email));
//     if (emailRegex.test(email)) {
//       setMailValid(true);
//     } else {
//       setMailValid(false);
//     }
//   }

//   function checkPassword(event) {
//     const val = event.target.value;
//     setPassword(val);

//     if (val.length >= 8) {
//       console.log("length is okay");
//       setIsPasswordLength(true);
//     } else {
//       setIsPasswordLength(false);
//     }
//   }

//   function checkConfirmPassword(event) {
//     const val = event.target.value;
//     setConfirmPassword(val);

//     if (password === val) {
//       setIsPasswordSame(true);
//     } else {
//       setIsPasswordSame(false);
//     }
//   }

//   checkAuth(mailValid, isPasswordLength, isPasswordSame);

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           placeholder="email"
//           value={email}
//           onChange={checkEmail}
//           style={{
//             border: `${mailValid ? "3px solid green" : "3px solid red"}`,
//           }}
//         />
//         {!mailValid && <span>please enter a valid email</span>}
//       </div>

//       <div>
//         <input
//           type="password"
//           placeholder="password"
//           value={password}
//           onChange={checkPassword}
//           style={{
//             border: `${isPasswordLength ? "3px solid green" : "3px solid red"}`,
//           }}
//         />
//         {!isPasswordLength && (
//           <span>password length should be minimum 8 chars</span>
//         )}
//       </div>

//       <div>
//         <input
//           type="password"
//           placeholder="confirm password"
//           value={confirmPassword}
//           onChange={checkConfirmPassword}
//           style={{
//             border: `${isPasswordSame ? "3px solid green" : "3px solid red"}`,
//           }}
//         />
//         {!isPasswordSame && <span>password should be same</span>}
//       </div>
//     </div>
//   );
// }
export default Auth;
