
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import LoginImage from '../../assets/images/l/avif.avif';
import '../../assets/css/p2.scss';

const Applications = () => {
    const [username, setUsername] = useState('');
    const [applicationsData, setApplicationsData] = useState([]);
    const [showApplications, setShowApplications] = useState(false); // Track if applications should be displayed

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:2020/api/users/enrollments/${username}`);
            console.log(response.data);
            setApplicationsData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowApplications(true); // Show applications after submit
        fetchData(); // Fetch data when form is submitted
    };
    const [paymentCompleted, setPaymentCompleted] = useState(false);

    const changePaymentStatus = async (id) => {
        try {
            const response = await axios.post(`http://localhost:2020/enrollments/${id}/payment/success`);
            // Handle the response if needed
            console.log(response.data); // Assuming response contains updated enrollment data
        } catch (error) {
            console.error('Error changing payment status:', error);
        }
    };
    const handlePayment = async (enrollmentId) => {
        try {
            const options = {
                key: "rzp_test_i1tLowNKXmrrLX",
          key_secret: "AC5ZHrWpt0uurpR7eXt9yUEQ",
          amount: 100,
          currency: "INR",
          name: "D-Portal",
          description: "for testing purpose",
          handler: function (response) {
            alert(response.razorpay_payment_id);
            changePaymentStatus(enrollmentId);
          },
          prefill: {
            name: "Vel",
            email: "cbvelyogesh@gmail.com@gmail.com",
            contact: "8754988838",
          },
          notes: {
            address: "Sri krishna college of Engineering and Technology",
          },
          theme: {
            color: "#3399cc",
          },
        };
  
        var pay = new window.Razorpay(options);
        pay.on('payment.success', function(response) {
            alert('Payment successful. Payment ID: ' + response.pay_payment_id);
            setPaymentCompleted(true); // Update state when payment is successful
            // Perform further actions after successful payment
        });
        pay.open();
      } catch (error) {
        console.error(error);
      }
    };


    return (
        <>
            <div>
                <img src={LoginImage} alt="Login Image" className="login-image3" />
                <Header />
                <main className="div-table__main">
                    <h1 className="app-heading">My Applications</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Please enter username for verification of your application" value={username} onChange={handleUsernameChange} />
                        {/* <button type="submit">Submit</button> */}
                    </form>
                    {showApplications && (
                        <div>
                            {applicationsData.map((user, userIndex) => (
                                <React.Fragment key={userIndex}>
                                    {user.enrollments.map((enrollment, enrollmentIndex) => (
                                        <article key={enrollmentIndex} className="div-table__row">
                                            <div className="div-table__text">
                                                <p className="div-table__text--primary div-table__text--left">{enrollment.collegeName}</p>
                                                <p className="div-table__text--secondary div-table__text--left">{enrollment.location}</p>
                                            </div>

                                            <div className="div-table__text">
                                                <p className="div-table__text--primary div-table__text--center">{enrollment.courseName}</p>
                                                <p className="div-table__text--secondary div-table__text--center">{enrollment.courseCode}</p>
                                            </div>

                                            <div className="div-table__text">
                                                <p className={`div-table__text--primary div-table__text--center ${enrollment.stage === "Accepted" ? 'commons__green' : ''}`}>{enrollment.stage}</p>
                                                {enrollment.stage === "confirmed" && (
                                                    <p className="div-table__text--secondary div-table__text--center">Please Wait</p>
                                                )}
                                            </div>

                                             {enrollment.stage === "confirmed" ? (
                                paymentCompleted ? (
                                    <button className="register-button">Register</button>
                                ) : (
                                    <button className="do-payment-button" onClick={() => handlePayment(enrollment.id)}>Do Payment</button>
                                )
                            ) : (
                                <button className="register-button">Register</button>
                            )}
                                        </article>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    )}
                </main>
            </div>
            <div className='cv'>
                <Footer />
            </div>
        </>
    );
}

export default Applications;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Header from '../common/header/Header';
// import Footer from '../common/footer/Footer';
// import { Link } from 'react-router-dom';
// import LoginImage from '../../assets/images/l/avif.avif';
// import '../../assets/css/p2.scss';

// const Applications = () => {
//     const [applicationsData, setApplicationsData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:2020/api/users');
//                 setApplicationsData(response.data);
//                 console.log(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

    // const changePaymentStatus = async (id) => {
    //     try {
    //         const response = await axios.post(`http://localhost:2020/enrollments/${id}/payment/success`);
    //         // Handle the response if needed
    //         console.log(response.data); // Assuming response contains updated enrollment data
    //     } catch (error) {
    //         console.error('Error changing payment status:', error);
    //     }
    // };

//     const handlePayment = (user) => {
//         try {
//             const amountx = 250;
//             var options = {
//                 key: "rzp_test_i1tLowNKXmrrLX",
//                 key_secret: "AC5ZHrWpt0uurpR7eXt9yUEQ",
//                 amount: amountx * 100,
//                 currency: "INR",
//                 name: "D-Portal",
//                 description: "for testing purpose",
//                 handler: function (response) {
//                     alert(response.razorpay_payment_id);
//                     changePaymentStatus(user.enrollments[0].id); // Assuming you have an id field in enrollment
//                 },
//                 prefill: {
//                     name: "Vel",
//                     email: "cbvelyogesh@gmail.com@gmail.com",
//                     contact: "8754988838",
//                 },
//                 notes: {
//                     address: "Sri krishna college of Engineering and Technology",
//                 },
//                 theme: {
//                     color: "#3399cc",
//                 },
//             };

//             var pay = new window.Razorpay(options);
//             pay.open();
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <>
//             <div>
//                 <img src={LoginImage} alt="Login Image" className="login-image3" />
//                 <Header />
//                 <main className="div-table__main">
//                     <h1 className="app-heading">My Applications</h1>
//                     {applicationsData.map((user, index) => (
//                         <article key={index} className="div-table__row">
//                             <div className="div-table__text">
//                                 {user.enrollments[0] && (
//                                     <>
//                                         <p className="div-table__text--primary div-table__text--left">{user.enrollments[0].collegeName}</p>
//                                         <p className="div-table__text--secondary div-table__text--left">{user.enrollments[0].location}</p>
//                                     </>
//                                 )}
//                             </div>

//                             <div className="div-table__text">
//                                 {user.enrollments[0] && (
//                                     <>
//                                         <p className="div-table__text--primary div-table__text--center">{user.enrollments[0].courseName}</p>
//                                         <p className="div-table__text--secondary div-table__text--center">{user.enrollments[0].courseCode}</p>
//                                     </>
//                                 )}
//                             </div>

//                             <div className="div-table__text">
//                                 {user.enrollments[0] && (
//                                     <>
//                                         <p className={`div-table__text--primary div-table__text--center ${user.enrollments[0].stage === "Accepted" ? 'commons__green' : ''}`}>{user.enrollments[0].stage}</p>
//                                         {user.enrollments[0].stage === "confirmed" && (
//                                             <p className="div-table__text--secondary div-table__text--center">Please Wait</p>
//                                         )}
//                                     </>
//                                 )}
//                             </div>

//                             {user.enrollments[0] && user.enrollments[0].stage === "confirmed" && (
//                                 <button className="do-payment-button" onClick={() => handlePayment(user)}>Do Payment</button>
//                             )}
//                         </article>
//                     ))}
//                 </main>
//             </div>
//             <div className='cv'>
//                 <Footer />
//             </div>
//         </>
//     );
// }

// export default Applications;
