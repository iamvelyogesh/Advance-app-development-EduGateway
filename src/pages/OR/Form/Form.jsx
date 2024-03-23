
// import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
// import HeroTextsu from "../HeroTextsu";
// import CtaBanner from "../CtaBanner";
// import InputErrorMsg from "./InputErrorMsg";
// import Modal from "../Modal";
// import useInput from "../hooks/use-input";
// import PasswordStrengthIndicator from "./PasswordStrengthIndicator ";
// import '../../../assets/css/css.css';
// import loginpage from '../../../assets/images/signup.jpg';

// const Form = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formIsSubmitted, setFormIsSubmitted] = useState(false);

//   const {
//     value: nameValue,
//     isValid: nameIsValid,
//     hasError: nameError,
//     onChangeHandler: nameInputChangeHandler,
//     onBlurHandler: nameInputBlurHandler,
//     reset: nameReset,
//   } = useInput((value) => value.trim() !== "");

//   const {
//     value: surnameValue,
//     isValid: surnameIsValid,
//     hasError: surnameError,
//     onChangeHandler: surnameInputChangeHandler,
//     onBlurHandler: surnameInputBlurHandler,
//     reset: surnameReset,
//   } = useInput((value) => value.trim() !== "");

//   const {
//     value: emailValue,
//     isValid: emailIsValid,
//     hasError: emailError,
//     onChangeHandler: emailInputChangeHandler,
//     onBlurHandler: emailInputBlurHandler,
//     reset: emailReset,
//   } = useInput((value) =>
//     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
//   );

//   const {
//     value: passwordValue,
//     isValid: passwordIsValid,
//     hasError: passwordError,
//     onChangeHandler: passwordInputChangeHandler,
//     onBlurHandler: passwordInputBlurHandler,
//     reset: passwordReset,
//   } = useInput((value) => value.trim() !== "");

//   const {
//     value: confirmPasswordValue,
//     isValid: confirmPasswordIsValid,
//     hasError: confirmPasswordError,
//     onChangeHandler: confirmPasswordInputChangeHandler,
//     onBlurHandler: confirmPasswordInputBlurHandler,
//     reset: confirmPasswordReset,
//   } = useInput((value) => value === passwordValue);

//   const {
//     value: phoneNumberValue,
//     isValid: phoneNumberIsValid,
//     hasError: phoneNumberError,
//     onChangeHandler: phoneNumberInputChangeHandler,
//     onBlurHandler: phoneNumberInputBlurHandler,
//     reset: phoneNumberReset,
//   } = useInput((value) => /^\d{10}$/.test(value));

//   const [role, setRole] = useState(""); // Initialize role state

//   let formIsValid = false;
//   if (
//     nameIsValid &&
//     surnameIsValid &&
//     emailIsValid &&
//     passwordIsValid &&
//     confirmPasswordIsValid &&
//     phoneNumberIsValid &&
//     role !== ""
//   )
//     formIsValid = true;

//   const onSubmitHandler = (event) => {
//     event.preventDefault();

//     if (!formIsValid) return;

//     setIsSubmitting(true);

//     setTimeout(() => {
//       console.log(
//         `${nameValue}\n${surnameValue}\n${emailValue}\n${passwordValue}\n${phoneNumberValue}\n${role}`
//       );
//       setIsSubmitting(false);
//       setFormIsSubmitted(true);
//     }, 5000);

//     nameReset();
//     surnameReset();
//     emailReset();
//     passwordReset();
//     confirmPasswordReset();
//     phoneNumberReset();
//   };

//   const toggleModal = () => {
//     setModalIsOpen(!modalIsOpen);
//   };

//   if (isSubmitting) {
//     return (
//       <div className="form__container">
//         <img src={loginpage} alt="Login Image" className="login-image" />
//         <p className="form-submiting-text">
//           Form submitted, thank you! You will be redirected shortly
//         </p>
//         <div className="lds-hourglass"></div>
//       </div>
//     );
//   }

//   if (formIsSubmitted) {
//     return (
//       <div className="form__container">
//         <Navigate to="/" />;
//       </div>
//     );
//   }

//   return (
//     <div className="bag">
//       <img src={loginpage} alt="Login Image" className="login-image" />
//     <div className="aa">
//       <HeroTextsu />
//       <div className="form__container">
//         <CtaBanner />
//         <form className="form" onSubmit={onSubmitHandler}>
//           <div className="form__input-box">
//             <input
//               className={nameError ? "error-border" : ""}
//               type="text"
//               placeholder={nameError || "First Name"}
//               value={nameValue}
//               onChange={nameInputChangeHandler}
//               onBlur={nameInputBlurHandler}
//             />
//             {nameError && (
//               <InputErrorMsg errorText="First Name cannot be empty" />
//             )}
//           </div>
//           <div className="form__input-box">
//             <input
//               className={surnameError ? "error-border" : ""}
//               type="text"
//               placeholder={surnameError || "Last Name"}
//               value={surnameValue}
//               onChange={surnameInputChangeHandler}
//               onBlur={surnameInputBlurHandler}
//             />
//             {surnameError && (
//               <InputErrorMsg errorText="Last Name cannot be empty" />
//             )}
//           </div>
//           <div className="form__input-box">
//             <input
//               className={emailError ? "error-border" : ""}
//               type="text"
//               placeholder={emailError || "Email Address"}
//               value={emailValue}
//               onChange={emailInputChangeHandler}
//               onBlur={emailInputBlurHandler}
//             />
//             {emailError && (
//               <InputErrorMsg errorText="Looks like this is not an email" />
//             )}
//           </div>
//           <div className="form__input-box">
//             <input
//               className={passwordError ? "error-border" : ""}
//               type="password"
//               placeholder={passwordError || "Password"}
//               value={passwordValue}
//               onChange={passwordInputChangeHandler}
//               onBlur={passwordInputBlurHandler}
//             />
//             {passwordError && (
//               <InputErrorMsg errorText="Password cannot be empty" />
//             )}
//             {/* Integrate PasswordStrengthIndicator here */}
//             <span>Password Strength :</span>
//             <PasswordStrengthIndicator password={passwordValue} />
//           </div>
//           <div className="form__input-box">
//             <input
//               className={confirmPasswordError ? "error-border" : ""}
//               type="password"
//               placeholder={
//                 confirmPasswordError || "Confirm Password (Must Match)"
//               }
//               value={confirmPasswordValue}
//               onChange={confirmPasswordInputChangeHandler}
//               onBlur={confirmPasswordInputBlurHandler}
//             />
//             {confirmPasswordError && (
//               <InputErrorMsg errorText="Passwords do not match" />
//             )}
//           </div>
//           <div className="form__input-box">
//             <input
//               className={phoneNumberError ? "error-border" : ""}
//               type="tel"
//               placeholder={phoneNumberError || "Phone Number"}
//               value={phoneNumberValue}
//               onChange={phoneNumberInputChangeHandler}
//               onBlur={phoneNumberInputBlurHandler}
//             />
//             {phoneNumberError && (
//               <InputErrorMsg errorText="Phone number cannot be empty" />
//             )}
//           </div>
//           <div className="form__input-box">
//             <label>
//               Role:
//               <select
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//                 onBlur={(e) => setRole(e.target.value)}
//               >
//                 <option value="">Select Role</option>
//                 <option value="admin">Admin</option>
//                 <option value="student">Student</option>
//               </select>
//             </label>
//           </div>
//           <button disabled={!formIsValid}>Signup</button>
//           <p className="form-terms">
//             <span className="form-terms--text">
//               By clicking this button you are agreeing to our
//             </span>
//             <a href="#" className="form-terms--link" onClick={toggleModal}>
//               Terms and Services
//             </a>
//           </p>
//         </form>
//         {modalIsOpen && <Modal onToggle={toggleModal} />}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Form;
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import HeroTextsu from "../HeroTextsu";
import CtaBanner from "../CtaBanner";
import InputErrorMsg from "./InputErrorMsg";
import Modal from "../Modal";
import useInput from "../hooks/use-input";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator ";
import '../../../assets/css/css.css';
import loginpage from '../../../assets/images/signup.jpg';
import axios from 'axios';

const Form = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameError,
    onChangeHandler: nameInputChangeHandler,
    onBlurHandler: nameInputBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: surnameValue,
    isValid: surnameIsValid,
    hasError: surnameError,
    onChangeHandler: surnameInputChangeHandler,
    onBlurHandler: surnameInputBlurHandler,
    reset: surnameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailError,
    onChangeHandler: emailInputChangeHandler,
    onBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInput((value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  );

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordError,
    onChangeHandler: passwordInputChangeHandler,
    onBlurHandler: passwordInputBlurHandler,
    reset: passwordReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: confirmPasswordValue,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordError,
    onChangeHandler: confirmPasswordInputChangeHandler,
    onBlurHandler: confirmPasswordInputBlurHandler,
    reset: confirmPasswordReset,
  } = useInput((value) => value === passwordValue);

  const {
    value: phoneNumberValue,
    isValid: phoneNumberIsValid,
    hasError: phoneNumberError,
    onChangeHandler: phoneNumberInputChangeHandler,
    onBlurHandler: phoneNumberInputBlurHandler,
    reset: phoneNumberReset,
  } = useInput((value) => /^\d{10}$/.test(value));

  const [role, setRole] = useState(""); // Initialize role state

  let formIsValid = false;
  if (
    nameIsValid &&
    surnameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid &&
    phoneNumberIsValid &&
    role !== ""
  )
    formIsValid = true;

    const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Check if any field is empty
    if (
      !nameValue.trim() ||
      !surnameValue.trim() ||
      !emailValue.trim() ||
      !passwordValue.trim() ||
      !confirmPasswordValue.trim() ||
      !phoneNumberValue.trim() ||
      !role.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Check if any error exists in form fields
    if (
      nameError ||
      surnameError ||
      emailError ||
      passwordError ||
      confirmPasswordError ||
      phoneNumberError
    ) {
      alert("Please correct the errors in the form.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:2020/api/users/new', {
        username: nameValue,
        email: emailValue,
        password: passwordValue,
        mobileNumber: phoneNumberValue,
        userRole: role
      });
  
      // Assuming the backend returns a success message upon successful signup
      console.log(response.data);
      setIsSubmitting(false);
      setFormIsSubmitted(true);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      alert("Signup failed. Please try again.");
    }

    setTimeout(() => {
      console.log(
        `${nameValue}\n${surnameValue}\n${emailValue}\n${passwordValue}\n${phoneNumberValue}\n${role}`
      );
      setIsSubmitting(false);
      setFormIsSubmitted(true);
    }, 5000);

    nameReset();
    surnameReset();
    emailReset();
    passwordReset();
    confirmPasswordReset();
    phoneNumberReset();
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  if (isSubmitting) {
    return (
      <div className="form__container">
        <img src={loginpage} alt="Login Image" className="login-image" />
        <p className="form-submiting-text">
          Form submitted, thank you! You will be redirected shortly
        </p>
        <div className="lds-hourglass"></div>
      </div>
    );
  }

  if (formIsSubmitted) {
    return (
      <div className="form__container">
        <Navigate to="/" />;
      </div>
    );
  }

  return (
    <div className="bag">
      <img src={loginpage} alt="Login Image" className="login-image" />
      <div className="aa">
        <HeroTextsu />
        <div className="form__container">
          <CtaBanner />
          <form className="form" onSubmit={onSubmitHandler}>
            <div className="form__input-box">
              <input
                className={nameError ? "error-border" : ""}
                type="text"
                placeholder="First Name"
                value={nameValue}
                onChange={nameInputChangeHandler}
                onBlur={nameInputBlurHandler}
              />
              {nameError && (
                <InputErrorMsg errorText="First Name cannot be empty" />
              )}
            </div>
            <div className="form__input-box">
              <input
                className={surnameError ? "error-border" : ""}
                type="text"
                placeholder="Last Name"
                value={surnameValue}
                onChange={surnameInputChangeHandler}
                onBlur={surnameInputBlurHandler}
              />
              {surnameError && (
                <InputErrorMsg errorText="Last Name cannot be empty" />
              )}
            </div>
            <div className="form__input-box">
              <input
                className={emailError ? "error-border" : ""}
                type="text"
                placeholder="Email Address"
                value={emailValue}
                onChange={emailInputChangeHandler}
                onBlur={emailInputBlurHandler}
              />
              {emailError && (
                <InputErrorMsg errorText="Looks like this is not an email" />
              )}
            </div>
            <div className="form__input-box">
              <input
                className={passwordError ? "error-border" : ""}
                type="password"
                placeholder="Password"
                value={passwordValue}
                onChange={passwordInputChangeHandler}
                onBlur={passwordInputBlurHandler}
              />
              {passwordError && (
                <InputErrorMsg errorText="Password cannot be empty" />
              )}
              {/* Integrate PasswordStrengthIndicator here */}
              <span>Password Strength :</span>
              <PasswordStrengthIndicator password={passwordValue} />
            </div>
            <div className="form__input-box">
              <input
                className={confirmPasswordError ? "error-border" : ""}
                type="password"
                placeholder="Confirm Password (Must Match)"
                value={confirmPasswordValue}
                onChange={confirmPasswordInputChangeHandler}
                onBlur={confirmPasswordInputBlurHandler}
              />
              {confirmPasswordError && (
                <InputErrorMsg errorText="Passwords do not match" />
              )}
            </div>
            <div className="form__input-box">
              <input
                className={phoneNumberError ? "error-border" : ""}
                type="tel"
                placeholder="Phone Number"
                value={phoneNumberValue}
                onChange={phoneNumberInputChangeHandler}
                onBlur={phoneNumberInputBlurHandler}
              />
              {phoneNumberError && (
                <InputErrorMsg errorText="Phone number cannot be empty" />
              )}
            </div>
            <div className="form__input-box">
              <label>
                Role:
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  onBlur={(e) => setRole(e.target.value)}
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="student">Student</option>
                </select>
              </label>
            </div>
            <button disabled={!formIsValid}>Signup</button>
            <p className="form-terms">
              <span className="form-terms--text">
                By clicking this button you are agreeing to our
              </span>
              <a href="#" className="form-terms--link" onClick={toggleModal}>
                Terms and Services
              </a>
            </p>
          </form>
          {modalIsOpen && <Modal onToggle={toggleModal} />}
        </div>
      </div>
    </div>
  );
};

export default Form;
// import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
// import HeroTextsu from "../HeroTextsu";
// import CtaBanner from "../CtaBanner";
// import InputErrorMsg from "./InputErrorMsg";
// import Modal from "../Modal";
// import useInput from "../hooks/use-input";
// import PasswordStrengthIndicator from "./PasswordStrengthIndicator ";
// import '../../../assets/css/css.css';
// import loginpage from '../../../assets/images/signup.jpg';


// const Form = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formIsSubmitted, setFormIsSubmitted] = useState(false);

//   const {
//     value: nameValue,
//     isValid: nameIsValid,
//     hasError: nameError,
//     onChangeHandler: nameInputChangeHandler,
//     onBlurHandler: nameInputBlurHandler,
//     reset: nameReset,
//   } = useInput((value) => value.trim() !== "");

//   const {
//     value: surnameValue,
//     isValid: surnameIsValid,
//     hasError: surnameError,
//     onChangeHandler: surnameInputChangeHandler,
//     onBlurHandler: surnameInputBlurHandler,
//     reset: surnameReset,
//   } = useInput((value) => value.trim() !== "");

//   const {
//     value: emailValue,
//     isValid: emailIsValid,
//     hasError: emailError,
//     onChangeHandler: emailInputChangeHandler,
//     onBlurHandler: emailInputBlurHandler,
//     reset: emailReset,
//   } = useInput((value) =>
//     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
//   );

//   const {
//     value: passwordValue,
//     isValid: passwordIsValid,
//     hasError: passwordError,
//     onChangeHandler: passwordInputChangeHandler,
//     onBlurHandler: passwordInputBlurHandler,
//     reset: passwordReset,
//   } = useInput((value) => value.trim() !== "");

//   const {
//     value: confirmPasswordValue,
//     isValid: confirmPasswordIsValid,
//     hasError: confirmPasswordError,
//     onChangeHandler: confirmPasswordInputChangeHandler,
//     onBlurHandler: confirmPasswordInputBlurHandler,
//     reset: confirmPasswordReset,
//   } = useInput((value) => value === passwordValue);

//   const {
//     value: phoneNumberValue,
//     isValid: phoneNumberIsValid,
//     hasError: phoneNumberError,
//     onChangeHandler: phoneNumberInputChangeHandler,
//     onBlurHandler: phoneNumberInputBlurHandler,
//     reset: phoneNumberReset,
//   } = useInput((value) => /^\d{10}$/.test(value));

//   const [role, setRole] = useState(""); // Initialize role state

//   let formIsValid = false;
//   if (
//     nameIsValid &&
//     surnameIsValid &&
//     emailIsValid &&
//     passwordIsValid &&
//     confirmPasswordIsValid &&
//     phoneNumberIsValid &&
//     role !== ""
//   )
//     formIsValid = true;

//   const onSubmitHandler = (event) => {
//     event.preventDefault();

//     // Check if any field is empty
//     if (
//       !nameValue.trim() ||
//       !surnameValue.trim() ||
//       !emailValue.trim() ||
//       !passwordValue.trim() ||
//       !confirmPasswordValue.trim() ||
//       !phoneNumberValue.trim() ||
//       !role.trim()
//     ) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     // Check if any error exists in form fields
//     if (
//       nameError ||
//       surnameError ||
//       emailError ||
//       passwordError ||
//       confirmPasswordError ||
//       phoneNumberError
//     ) {
//       alert("Please correct the errors in the form.");
//       return;
//     }

//     setIsSubmitting(true);

//     setTimeout(() => {
//       console.log(
//         `${nameValue}\n${surnameValue}\n${emailValue}\n${passwordValue}\n${phoneNumberValue}\n${role}`
//       );
//       setIsSubmitting(false);
//       setFormIsSubmitted(true);
//     }, 5000);

//     nameReset();
//     surnameReset();
//     emailReset();
//     passwordReset();
//     confirmPasswordReset();
//     phoneNumberReset();
//   };

//   const toggleModal = () => {
//     setModalIsOpen(!modalIsOpen);
//   };

//   if (isSubmitting) {
//     return (
//       <div className="form__container">
//         <img src={loginpage} alt="Login Image" className="login-image" />
//         <p className="form-submiting-text">
//           Form submitted, thank you! You will be redirected shortly
//         </p>
//         <div className="lds-hourglass"></div>
//       </div>
//     );
//   }

//   if (formIsSubmitted) {
//     return (
//       <div className="form__container">
//         <Navigate to="/" />;
//       </div>
//     );
//   }

//   return (
//     <div className="bag">
//       <img src={loginpage} alt="Login Image" className="login-image" />
//       <div className="aa">
//         <HeroTextsu />
//         <div className="form__container">
//           <CtaBanner />
//           <form className="form" onSubmit={onSubmitHandler}>
//             <div className="form__input-box">
//               <input
//                 className={nameError ? "error-border" : ""}
//                 type="text"
//                 placeholder="First Name"
//                 value={nameValue}
//                 onChange={nameInputChangeHandler}
//                 onBlur={nameInputBlurHandler}
//               />
//               {nameError && (
//                 <InputErrorMsg errorText="First Name cannot be empty" />
//               )}
//             </div>
//             <div className="form__input-box">
//               <input
//                 className={surnameError ? "error-border" : ""}
//                 type="text"
//                 placeholder="Last Name"
//                 value={surnameValue}
//                 onChange={surnameInputChangeHandler}
//                 onBlur={surnameInputBlurHandler}
//               />
//               {surnameError && (
//                 <InputErrorMsg errorText="Last Name cannot be empty" />
//               )}
//             </div>
//             <div className="form__input-box">
//               <input
//                 className={emailError ? "error-border" : ""}
//                 type="text"
//                 placeholder="Email Address"
//                 value={emailValue}
//                 onChange={emailInputChangeHandler}
//                 onBlur={emailInputBlurHandler}
//               />
//               {emailError && (
//                 <InputErrorMsg errorText="Looks like this is not an email" />
//               )}
//             </div>
//             <div className="form__input-box">
//               <input
//                 className={passwordError ? "error-border" : ""}
//                 type="password"
//                 placeholder="Password"
//                 value={passwordValue}
//                 onChange={passwordInputChangeHandler}
//                 onBlur={passwordInputBlurHandler}
//               />
//               {passwordError && (
//                 <InputErrorMsg errorText="Password cannot be empty" />
//               )}
//               {/* Integrate PasswordStrengthIndicator here */}
//               <span>Password Strength :</span>
//               <PasswordStrengthIndicator password={passwordValue} />
//             </div>
//             <div className="form__input-box">
//               <input
//                 className={confirmPasswordError ? "error-border" : ""}
//                 type="password"
//                 placeholder="Confirm Password (Must Match)"
//                 value={confirmPasswordValue}
//                 onChange={confirmPasswordInputChangeHandler}
//                 onBlur={confirmPasswordInputBlurHandler}
//               />
//               {confirmPasswordError && (
//                 <InputErrorMsg errorText="Passwords do not match" />
//               )}
//             </div>
//             <div className="form__input-box">
//               <input
//                 className={phoneNumberError ? "error-border" : ""}
//                 type="tel"
//                 placeholder="Phone Number"
//                 value={phoneNumberValue}
//                 onChange={phoneNumberInputChangeHandler}
//                 onBlur={phoneNumberInputBlurHandler}
//               />
//               {phoneNumberError && (
//                 <InputErrorMsg errorText="Phone number cannot be empty" />
//               )}
//             </div>
//             <div className="form__input-box">
//               <label>
//                 Role:
//                 <select
//                   value={role}
//                   onChange={(e) => setRole(e.target.value)}
//                   onBlur={(e) => setRole(e.target.value)}
//                 >
//                   <option value="">Select Role</option>
//                   <option value="admin">Admin</option>
//                   <option value="student">Student</option>
//                 </select>
//               </label>
//             </div>
//             <button disabled={!formIsValid}>Signup</button>
//             <p className="form-terms">
//               <span className="form-terms--text">
//                 By clicking this button you are agreeing to our
//               </span>
//               <a href="#" className="form-terms--link" onClick={toggleModal}>
//                 Terms and Services
//               </a>
//             </p>
//           </form>
//           {modalIsOpen && <Modal onToggle={toggleModal} />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Form;
