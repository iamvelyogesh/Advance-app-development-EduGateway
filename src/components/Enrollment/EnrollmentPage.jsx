// import React, { useState } from 'react';
// import '../../assets/css/EnrollmentPage.css';
// import Header from '../common/header/Header';
// import Footer from '../common/footer/Footer';
// import a from '../../assets/images/l/bg.webp';

// function EnrollmentPage() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     twelfthMark: '',
//     course: 'CSE',
//   });
//   const [isChecked, setIsChecked] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isChecked) {
//       // Submit form data
//       console.log('Form data submitted:', formData);
//       alert('Form has been submitted');
//     } else {
//       alert('Please review and check the confirmation box before submitting.');
//     }
//   };

//   return (
//     <>
//      <img src={a} alt="Login Image" className="login-image1" />
//     <Header/>
//     <div className="enrollment-container">
//       <h1>Course Enrollment</h1>

//       <div className="course-selection">
//         <h2>Available Courses:</h2>
//         <select name="course" value={formData.course} onChange={handleChange}>
//           <option value="CSE">Computer Science Engineering</option>
//           <option value="IT">Information Technology</option>
//           <option value="AIDS">Artificial Intelligence and Data Science</option>
//           <option value="MCT">Media and Communication Technology</option>
//           <option value="Mechanical">Mechanical Engineering</option>
//         </select>
//       </div>

//       <form onSubmit={handleSubmit} className="enrollment-form">
//         <label>
//           First Name:
//           <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
//         </label><br />

//         <label>
//           Last Name:
//           <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
//         </label><br />

//         <label>
//           Phone:
//           <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
//         </label><br />

//         <label>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleChange} />
//         </label><br />

//         <label>
//           12th Mark:
//           <input type="text" name="twelfthMark" value={formData.twelfthMark} onChange={handleChange} />
//         </label><br />

//         <label>
//           <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
//           I confirm that the information provided is correct.
//         </label><br />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//     <Footer/>
//     </>
//   );
// }

// export default EnrollmentPage;

import React, { useState } from 'react';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import '../../assets/css/css.css'; 
import '../../assets/css/EnrollmentPage.css';
import a from '../../assets/images/l/bg.webp';
import { Navigate } from 'react-router-dom';

function EnrollmentPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    twelfthMark: '',
    course: 'SELECT',
  });
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      setIsSubmitting(true);
      // Simulating form submission delay
      setTimeout(() => {
        console.log('Form data submitted:', formData);
        setIsSubmitting(false);
        setFormIsSubmitted(true);
      }, 5000);
    } else {
      alert('Please review and check the confirmation box before submitting.');
    }
  };

  if (isSubmitting) {
    // setFormIsSubmitted(true);
    return (
      <div className="form__container">
        <img src={a} alt="Login Image" className="login-image1" />
        <p className="form-submiting-text">
          Application has been submitted!
        </p>
        <div className="lds-hourglass"></div>
        
      </div>
    );
  }

  if (formIsSubmitted) {
    return (
      <div className="form__container">
        <Navigate to="/home" />;
      </div>
    );
  }

  return (
    <>
     <img src={a} alt="Login Image" className="login-image1" />
    <Header/>
    <div className="enrollment-container">
      <h1>Course Enrollment</h1>

      <div className="course-selection">
        <h2>Available Courses:</h2>
        <select name="course" value={formData.course} onChange={handleChange}>
          <option value="SELECT">SELECT AVAILABLE COURSE</option>
          <option value="CSE">Computer Science Engineering</option>
          <option value="IT">Information Technology</option>
          <option value="AIDS">Artificial Intelligence and Data Science</option>
          <option value="MCT">Media and Communication Technology</option>
          <option value="Mechanical">Mechanical Engineering</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="enrollment-form">
        <label className='C'>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label><br />

        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required/>
        </label><br />

        <label>
          Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required/>
        </label><br />

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
        </label><br />

        <label>
          12th Mark:
          <input type="text" name="twelfthMark" value={formData.twelfthMark} onChange={handleChange} required/>
        </label><br />

        <label>
          <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} required/>
          I confirm that the information provided is correct.
        </label><br />

        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default EnrollmentPage;

