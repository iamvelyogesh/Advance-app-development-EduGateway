import React from "react";
import ReactDOM from "react-dom";
// import CloseIcon from "/images/close-outline.svg";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onToggle} />;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal-overlay">
      <img
        className="icon-modal-close"
        // src={CloseIcon}
        onClick={props.onToggle}
      />
      <br></br><br></br><br></br><br></br>
      <h2>Terms and Services</h2>
      <p>
      Terms and Conditions for Education Counseling Website<br></br><br></br>

Welcome to my website, operated by Vel. 
<br></br>
1. <b>Acceptance of Terms:</b> By accessing or using our website or services, you agree to be bound by these Terms and any additional terms and conditions that may apply to specific services provided by us.
<br></br>
2. <b>Services Offered:</b> Our website provides educational counseling services including but not limited to guidance on academic programs, career choices, and educational resources. These services are provided for informational purposes only and do not constitute professional advice.
<br></br>
3. <b>Privacy Policy:</b> Your use of our website and services is also subject to our Privacy Policy, which governs the collection, use, and disclosure of your personal information. By using our website or services, you consent to the terms of our Privacy Policy.
<br></br>
4. <b>User Account:</b> Some features of our website may require you to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and complete information when creating your account and to update your information as necessary.
<br></br>

5. <b>Disclaimer of Warranties:</b> Our website and services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We do not warrant that our website or services will be uninterrupted or error-free, or that any defects will be corrected.
<br></br><br></br>

<b>By using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms.</b>
      </p>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onToggle={props.onToggle} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onToggle={props.onToggle} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
