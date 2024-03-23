import React from "react";
import "../../../assets/css/psi.css"; // Import CSS for styling

const PasswordStrengthIndicator = ({ password }) => {
    const calculatePasswordStrength = (password) => {
        // Regular expressions to check for different types of characters
        const lowercaseRegex = /[a-z]/;
        const uppercaseRegex = /[A-Z]/;
        const numberRegex = /[0-9]/;
        const symbolRegex = /[$&+,:;=?@#|'<>.^*()%!-]/; // Add more symbols if needed
    
        let strength = 0;
    
        // Check if password contains at least one lowercase alphabet
        if (lowercaseRegex.test(password)) {
          strength++;
        }
    
        // Check if password contains at least one uppercase alphabet
        if (uppercaseRegex.test(password)) {
          strength++;
        }
    
        // Check if password contains at least one number
        if (numberRegex.test(password)) {
          strength++;
        }
    
        // Check if password contains at least one symbol
        if (symbolRegex.test(password)) {
          strength++;
        }
    
        return strength;
      };
    
      const passwordStrength = calculatePasswordStrength(password);


  return (
    <div className="password-strength-indicator">
      <div
        className={`strength-bar strength-${passwordStrength}`}
      ></div>
    </div>
  );
};

export default PasswordStrengthIndicator;
