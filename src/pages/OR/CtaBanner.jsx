import React from "react";
import '../../assets/css/banner.css';
const CtaBanner = () => {
  const handleSignUpClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="banner">
      <p className="banner-text">
        <span className="banner-text--secondary">Have an account? </span>
       <span className="banner-text--primary pointerr" onClick={handleSignUpClick}>Sign in</span>
      </p>
    </div>
  );
};

export default CtaBanner;
