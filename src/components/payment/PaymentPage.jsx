// import React from 'react';
// import './PaymentPage.css'; // Importing CSS file
// import Header from '../common/header/Header';
// import Footer from '../common/footer/Footer';
// import a from '../../assets/images/l/bg.webp';

// const PaymentPage = () => {
//   return (
//     <>
//     <img src={a} alt="Login Image" className="login-image" />
//     <Header/>
//     <div className="payment-container">
//       <h2>Payment Page</h2>
//       <form className="payment-form">
//         <label htmlFor="cardNumber">Card Number</label>
//         <input type="text" id="cardNumber" placeholder="Enter card number" />
        
//         <label htmlFor="expiry">Expiry Date</label>
//         <input type="text" id="expiry" placeholder="MM/YY" />
        
//         <label htmlFor="cvv">CVV</label>
//         <input type="text" id="cvv" placeholder="CVV" />
        
//         <label htmlFor="name">Cardholder Name</label>
//         <input type="text" id="name" placeholder="Enter cardholder name" />
        
//         <button type="submit" className="pay-button">Pay Now</button>
//       </form>
//     </div>
//     <div className='asas'>
//     <Footer/>
//     </div>
//     </>
//   );
// };

// export default PaymentPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom instead of useHistory
import './PaymentPage.css'; // Importing CSS file
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import a from '../../assets/images/l/bg.webp';

const PaymentPage = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false); // State to manage payment success message
  const navigate = useNavigate(); // Get navigate function for navigation

  const handlePayment = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)

    // Perform payment logic here (e.g., API call)

    // Assume payment is successful for now
    setPaymentSuccess(true);

    // Navigate to '/'
    alert("Reserved successfully")
    navigate('/home');
  };

  return (
    <>
      <img src={a} alt="Login Image" className="login-image" />
      <Header />
      <div className="payment-container">
        <h2>Payment Page</h2>
        <form className="payment-form" onSubmit={handlePayment}>
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" placeholder="Enter card number" required/>

          <label htmlFor="expiry">Expiry Date</label>
          <input type="text" id="expiry" placeholder="MM/YY" required/>

          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" placeholder="CVV" required/>

          <label htmlFor="name">Cardholder Name</label>
          <input type="text" id="name" placeholder="Enter cardholder name" required/>

          <button type="submit" className="pay-button">Pay Now</button>
        </form>
        {paymentSuccess && <p>Reserved successfully</p>} {/* Show success message if paymentSuccess is true */}
      </div>
      <div className='asas'>
      <Footer />
      </div>
    </>
  );
};

export default PaymentPage;

