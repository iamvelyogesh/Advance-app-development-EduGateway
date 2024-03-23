import React from "react";
import '../../assets/css/banner.css';

const CtaLBanner = () => {
  const handleSignUpClick = () => {
    window.location.href = '/signup';
  };

  return (
    <div className="banner">
      <p className="banner-text">
        <span className="banner-text--secondary">New Applicant? </span>
        <span className="banner-text--primary pointerr" onClick={handleSignUpClick}>Sign up</span>
      </p>
    </div>
  );
};

export default CtaLBanner;
