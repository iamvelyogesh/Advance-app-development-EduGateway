// import React from "react"
// import "../../assets/css/courses.css"
// import '@fortawesome/fontawesome-free/css/all.min.css';

// import { coursesCard } from "../../dummydata"
// import { Link } from "react-router-dom";

// const CoursesCard = () => {
//   return (
//     <>
 
//       <section className='coursesCard'>
//         <div className='container grid2'>
//           {coursesCard.map((val) => (
//             <div className='items'>
//               <div className='content'>
//                 {/* <div className='left'> */}
//                   <div className='imgg'>
//                     <img src={val.cover} alt='' />
//                   {/* </div> */}
//                 </div>
//                 <div className='text'>
//                   <h1>{val.coursesName}</h1>
//                   {/* <div className="flex"> */}
//                   <div className='rate'>
//                     <i className='fa fa-star'></i>
//                     <i className='fa fa-star'></i>
//                     <i className='fa fa-star'></i>
//                     <i className='fa fa-star'></i>
//                     <i className='fa fa-star'></i>
//                     <label htmlFor=''>(5.0)</label>
//                   </div>
//                   <div className='details'>
//                     {val.courTeacher.map((details) => (
//                       <>
//                         <div className='box'>
//                           <div className='dimg'>
//                             <img src={details.dcover} alt='' />
//                           </div>
//                           <div className='para'>
//                             <h4>{details.name}</h4>
//                           </div>
//                         </div>
//                         {/* <span>{details.totalTime}</span> */}
//                       </>
//                     ))}
//                   </div>
//                   {/* </div> */}
//                 </div>
//               </div>
//               <div className='price'>
//                 <h3>
//                   {val.priceAll} / {val.pricePer}
//                 </h3>
//               </div>
//               <Link to = '/enroll'><button className='outline-btn'>ENROLL NOW !</button></Link>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }

// export default CoursesCard








































































// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../../assets/css/courses.css";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { Link } from "react-router-dom";

// const CoursesCard = () => {
//   const [coursesCard, setCoursesCard] = useState([]);

//   useEffect(() => {
//     // Fetch data from the API endpoint using Axios
//     axios.get('http://localhost:2020/api/institutes')
//       .then(response => {
//         setCoursesCard(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <section className='coursesCard'>
//       <div className='container grid2'>
//         {coursesCard.map((val) => (
//           <div className='items' key={val.instituteId}>
//             <div className='content'>
//               <div className='imgg'>
//                 <img src={val.imageUrl} alt='' />
//               </div>
//               <div className='text'>
//                 <h1>{val.instituteName}</h1>
//                 <div className='rate'>
//                   {/* Assuming starnumber ranges from 0 to 5 */}
//                   {[...Array(Math.floor(val.starnumber))].map((_, index) => (
//                     <i key={index} className='fa fa-star'></i>
//                   ))}
//                   {/* Displaying the remaining star if it's a decimal value */}
//                   {val.starnumber % 1 !== 0 && <i className='fa fa-star-half-alt'></i>}
//                   <label htmlFor=''>({val.starnumber.toFixed(1)})</label>
//                 </div>
//                 <div className='details'>
//                   {/* {val.courses.map((course) => ( */}
//                     <div className='box'>
//                       <div className='dimg'>
//                         <img src={val.profileUrl} alt='' />
//                       </div>
//                       <div className='para'>
//                         <h4>{val.founder}</h4>
//                       </div>
//                     </div>
//                   {/* ))} */}
//                 </div>
//               </div>
//               <div className='price'>
//                 <h3>
//                    {val.noOfCoursesAvailable} departments/ Average fees:{val.avgfee} per year
//                 </h3>
//               </div>
//               <Link to='/enroll'><button className='outline-btn'>ENROLL NOW !</button></Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CoursesCard;






























































import React, { useState, useEffect } from "react";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, TextField, Grid, Card, CardContent } from "@material-ui/core";

const CoursesCard = () => {
  const [coursesCard, setCoursesCard] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showCourseDialog, setShowCourseDialog] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false); 
  const [formData, setFormData] = useState({
    insid: "",
    applicationId: "",
    studentName: "",
    studentMail: "",
    studentPhoneNumber: "",
    twelfthMarks: "",
    aadharNumber: "",
    courseName: "",
    courseCode: "",
    collegeName: "",
    location: ""
  });

  useEffect(() => {
    axios.get('http://localhost:2020/api/institutes')
      .then(response => {
        setCoursesCard(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSeeCourse = (course) => {
    setSelectedCourse(course);
    setShowCourseDialog(true);
  };

  const handleCloseCourseDialog = () => {
    setSelectedCourse(null);
    setShowCourseDialog(false);
  };

  const handleEnroll = () => {
    setShowApplicationForm(true);
  };

  const handleCloseApplicationForm = () => {
    setShowApplicationForm(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:2020/enrollments/${formData.insid}/courses`, formData);
      console.log("Course created:", response.data);
      setShowApplicationForm(false);
      // Optionally, you can navigate to another page or show a success message upon successful submission
    } catch (error) {
      console.log(formData);
      console.error("Error creating course:", error);
      // Handle error appropriately
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <section className='coursesCard'>
      <div className='container grid2'>
        {coursesCard.map((val) => (
          <div className='items' key={val.instituteId}>
            <div className='content'>
              <div className='imgg'>
                <img src={val.imageUrl} alt='' />
              </div>
              <div className='text'>
                <h1>{val.instituteName}</h1>
                <div className='rate'>
                  {[...Array(Math.floor(val.starnumber))].map((_, index) => (
                    <i key={index} className='fa fa-star'></i>
                  ))}
                  {val.starnumber % 1 !== 0 && <i className='fa fa-star-half-alt'></i>}
                  <label htmlFor=''>({val.starnumber.toFixed(1)})</label>
                </div>
                <div className='details'>
                  <div className='box'>
                    <div className='dimg'>
                      <img src={val.profileUrl} alt='' />
                    </div>
                    <div className='para'>
                      <h4>{val.founder}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.noOfCoursesAvailable} departments/ Average fees:{val.avgfee} per year
                </h3>
              </div>
              <button className='outline-btn' onClick={() => handleSeeCourse(val)}>See Course!</button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={showCourseDialog} onClose={handleCloseCourseDialog} maxWidth="md">
        <DialogTitle>Course Details</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            {selectedCourse && selectedCourse.courses.map((course) => (
              <Grid item xs={12} sm={6} md={4} key={course.courseId}>
                <Card>
                  <CardContent style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
                    <Typography variant="h3" style={{ marginBottom: "0.5rem" }}>
                      {course.courseName}
                    </Typography>
                    <Typography variant="body1" style={{ marginBottom: "0.5rem" }}>
                      <strong>Course Id:</strong> {course.courseId}
                    </Typography>
                    <Typography variant="body1" style={{ marginBottom: "0.5rem" }}>
                      <strong>Description:</strong> {course.courseDescription}
                    </Typography>
                    <Typography variant="body1" style={{ marginBottom: "0.5rem" }}>
                      <strong>Duration:</strong> {course.courseDuration}
                    </Typography>
                    <Typography variant="body1" style={{ marginBottom: "0.5rem" }}>
                      <strong>Fees:</strong> {course.fees}
                    </Typography>
                    <Typography variant="body1" style={{ marginBottom: "0.5rem" }}>
                      <strong>No. of Seats:</strong> {course.noOfSeats}
                    </Typography>
                    <div style={{ textAlign: "center" }}>
                      <Button
                        onClick={() => handleEnroll()}
                        variant="contained"
                        color="primary"
                        style={{
                          backgroundColor: "orange",
                          marginTop: "1rem",
                          marginRight: "0.5rem",
                        }}
                      >
                        Enroll
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCourseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={showApplicationForm} onClose={handleCloseApplicationForm} maxWidth="md">
        <DialogTitle>Application Form</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="insid"
                label="Enter the user ID for Confirmation"
                value={formData.insid}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="applicationId"
                label="Enter your Application ID"
                value={formData.applicationId}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="studentName"
                label="Student Name"
                value={formData.studentName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="studentMail"
                label="Student Email"
                value={formData.studentMail}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="studentPhoneNumber"
                label="Student Phone Number"
                value={formData.studentPhoneNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="twelfthMarks"
                label="Twelfth Marks"
                value={formData.twelfthMarks}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="aadharNumber"
                label="Aadhar Number"
                value={formData.aadharNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="courseName"
                label="Course Name"
                value={formData.courseName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="courseCode"
                label="Course Code"
                value={formData.courseCode}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="collegeName"
                label="College Name"
                value={formData.collegeName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="location"
                label="Location"
                value={formData.location}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseApplicationForm} color="primary">
            Close
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default CoursesCard;


























// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography,TextField , Grid, Card, CardContent } from "@material-ui/core";

// const CoursesCard = () => {
//   const [coursesCard, setCoursesCard] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [showCourseDialog, setShowCourseDialog] = useState(false);
//   const [showApplicationForm, setShowApplicationForm] = useState(false);
//   const [formData, setFormData] = useState({
//     insid: "",
//     applicationId: "",
//     studentName: "",
//     studentMail: "",
//     studentPhoneNumber: "",
//     twelfthMarks: "",
//     aadharNumber: "",
//     courseName: "",
//     courseCode: "",
//     collegeName: "",
//     location: ""
//   });

//   useEffect(() => {
//     axios.get('http://localhost:2020/api/institutes')
//       .then(response => {
//         setCoursesCard(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const handleSeeCourse = (course) => {
//     setSelectedCourse(course);
//     setShowCourseDialog(true);
//   };

//   const handleCloseCourseDialog = () => {
//     setSelectedCourse(null);
//     setShowCourseDialog(false);
//   };

//   const handleEnroll = () => {
//     setShowApplicationForm(true);
//   };

//   const handleCloseApplicationForm = () => {
//     setShowApplicationForm(false);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(`http://localhost:2020/enrollments/${formData.insid}/courses`, formData);
//       console.log("Course created:", response.data);
//       // Optionally, you can navigate to another page or show a success message upon successful submission
//     } catch (error) {
//       console.error("Error creating course:", error);
//       // Handle error appropriately
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   return (
//     <section className='coursesCard'>
//       <div className='container grid2'>
//         {coursesCard.map((val) => (
//           <div className='items' key={val.instituteId}>
//             <div className='content'>
//               <div className='imgg'>
//                 <img src={val.imageUrl} alt='' />
//               </div>
//               <div className='text'>
//                 <h1>{val.instituteName}</h1>
//                 <div className='rate'>
//                   {[...Array(Math.floor(val.starnumber))].map((_, index) => (
//                     <i key={index} className='fa fa-star'></i>
//                   ))}
//                   {val.starnumber % 1 !== 0 && <i className='fa fa-star-half-alt'></i>}
//                   <label htmlFor=''>({val.starnumber.toFixed(1)})</label>
//                 </div>
//                 <div className='details'>
//                   <div className='box'>
//                     <div className='dimg'>
//                       <img src={val.profileUrl} alt='' />
//                     </div>
//                     <div className='para'>
//                       <h4>{val.founder}</h4>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className='price'>
//                 <h3>
//                   {val.noOfCoursesAvailable} departments/ Average fees:{val.avgfee} per year
//                 </h3>
//               </div>
//               <button className='outline-btn' onClick={() => handleSeeCourse(val)}>See Course!</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Dialog open={showCourseDialog} onClose={handleCloseCourseDialog} maxWidth="md">
//         <DialogTitle>Course Details</DialogTitle>
//         <DialogContent>
//           <Grid container spacing={3}>
//             {selectedCourse && selectedCourse.courses.map((course) => (
//               <Grid item xs={12} sm={6} md={4} key={course.courseId}>
//                 <Card>
//                   <CardContent style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
//                     <Typography variant="h3" style={{ marginBottom: "0.5rem" }}>
//                       {course.courseName}
//                     </Typography>
//                     {/* Render other course details here */}
//                     <Typography variant="body1" style={{ marginBottom: "0.5rem" }}>
//                       <strong>Course Id:</strong> {course.courseId}
//                     </Typography>
//                     <Typography variant="body1" style={{ marginBottom: "0.5rem" }}>
//                       <strong>Description:</strong> {course.courseDescription}
//                     </Typography>
//                     <Typography variant="body1" style={{ marginBottom: "0.5rem" }}>
//                       <strong>Duration:</strong> {course.courseDuration}
//                     </Typography>
//                     <Typography variant="body1" style={{ marginBottom: "0.5rem" }}>
//                       <strong>Fees:</strong> {course.fees}
//                     </Typography>
//                     <Typography variant="body1" style={{ marginBottom: "0.5rem" }}>
//                       <strong>No. of Seats:</strong> {course.noOfSeats}
//                     </Typography>
//                     <div style={{ textAlign: "center" }}>
//                       <Button
//                         onClick={() => handleEnroll()}
//                         variant="contained"
//                         color="primary"
//                         style={{
//                           backgroundColor: "orange",
//                           marginTop: "1rem",
//                           marginRight: "0.5rem",
//                         }}
//                       >
//                         Enroll
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseCourseDialog} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <Dialog open={showApplicationForm} onClose={handleCloseApplicationForm} maxWidth="md">
//         <DialogTitle>Application Form</DialogTitle>
//         <DialogContent>
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 name="insid"
//                 label="Enter the institute ID for Confirmation"
//                 value={formData.insid}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 name="applicationId"
//                 label="Enter your Application ID"
//                 value={formData.applicationId}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 name="studentName"
//                 label="Student Name"
//                 value={formData.studentName}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 name="studentMail"
//                 label="Student Email"
//                 value={formData.studentMail}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 name="studentPhoneNumber"
//                 label="Student Phone Number"
//                 value={formData.studentPhoneNumber}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 name="twelfthMarks"
//                 label="Twelfth Marks"
//                 value={formData.twelfthMarks}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 name="aadharNumber"
//                 label="Aadhar Number"
//                 value={formData.aadharNumber}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 name="courseName"
//                 label="Course Name"
//                 value={formData.courseName}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 name="courseCode"
//                 label="Course Code"
//                 value={formData.courseCode}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 name="collegeName"
//                 label="College Name"
//                 value={formData.collegeName}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 name="location"
//                 label="Location"
//                 value={formData.location}
//                 onChange={handleChange}
//               />
//             </Grid>
//           </Grid>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseApplicationForm} color="primary">
//             Close
//           </Button>
//           <Button onClick={handleSubmit} color="primary">
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </section>
//   );
// };

// export default CoursesCard;































































































































// import React, { useState, useEffect } from "react";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   Button,
//   Grid,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField
// } from "@material-ui/core";

// const InstitutesPage = () => {
//   const [institutes, setInstitutes] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [showApplicationForm, setShowApplicationForm] = useState(false);
//   const [InstituteId, setInstituteId] = useState(null);

//   const [formData, setFormData] = useState({
//     insid:"",
//     applicationId: "",
//     studentName: "",
//     studentMail: "",
//     studentPhoneNumber: "",
//     twelfthMarks: "",
//     aadharNumber: "",
//     stage: "applied",
//     courseName: "", 
//     courseCode: "", 
//     collegeName: "", 
//     location: ""
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:2020/api/institutes");
//       setInstitutes(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleSeeCourse = (course) => {
//     setSelectedCourse(course);
//   };

//   const handleEnroll = () => {
//     setShowApplicationForm(true);
//   };

//   const handleCloseApplicationForm = () => {
//     setShowApplicationForm(false);
//   };

//   const handleClose = () => {
//     setSelectedCourse(null);
//   };

//   const handleEditCourse = (courseId) => {
//     navigate(`/admin/editcourses/${courseId}`);
//   };

//   const handleEditCollege = (instituteId) => {
//     navigate(`/applicationform/${instituteId}`);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
      
//       const response = await axios.post(`http://localhost:2020/enrollments/${formData.insid}/courses`, formData);
//       console.log("Course created:", response.data);
//       // Optionally, you can navigate to another page or show a success message upon successful submission
//     } catch (error) {
//       console.error("Error creating course:", error);
//       // Handle error appropriately
//     }
//   };

  

//   // const handleChange = (event) => {
//   //   setFormData({
//   //     ...formData,
//   //     [event.target.name]: event.target.value
//   //   });
//   // };
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };
  

//   return (
//     <Container>
//       <Typography variant="h1" gutterBottom align="center">
//         Institutes for you!!
//       </Typography>
//       <Grid container spacing={3}>
//         {institutes.map((institute) => (
//           <Grid item xs={12} sm={6} md={4} key={institute.instituteId}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h5">
//                 {institute.instituteName}
//                 </Typography>
//                 {/* <Typography variant="body1">
//                   <strong>Name:</strong> {institute.instituteName}
//                 </Typography> */}
//                 <Typography variant="body1">
//                   <strong>Description:</strong>{" "}
//                   {institute.instituteDescription}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Address:</strong> {institute.instituteAddress}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Mobile:</strong> {institute.mobile}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Email:</strong> {institute.email}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>No. of Courses Available:</strong>{" "}
//                   {institute.noOfCoursesAvailable}
//                 </Typography>
//                 <Button
//                   onClick={() => handleSeeCourse(institute.courses)}
//                   variant="contained"
//                   style={{ backgroundColor: "#98FB98", marginTop: "1rem", marginLeft:'32%' }}
//                 >
//                   See Course
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <Dialog open={selectedCourse !== null} onClose={handleClose} maxWidth="md">
//         <DialogTitle>Course Details</DialogTitle>
//         <DialogContent>
//           <Grid container spacing={3}>
//             {selectedCourse &&
//               selectedCourse.map((course) => (
//                 <Grid item xs={12} sm={6} md={4} key={course.courseId}>
//                   <Card>
//                     <CardContent
//                       style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
//                     >
//                       <Typography variant="h3" style={{ marginBottom: "0.5rem" }}>
//                         {course.courseName}
//                       </Typography>
//                       <Typography variant="body1" style={{ marginBottom: "0.5rem" }}>
//                         <strong>Course Id:</strong> {course.courseId}
//                       </Typography>
//                       <Typography variant="body1" style={{ marginBottom: "0.5rem" }}>
//                         <strong>Description:</strong> {course.courseDescription}
//                       </Typography>
//                       <Typography variant="body1" style={{ marginBottom: "0.5rem" }}>
//                         <strong>Duration:</strong> {course.courseDuration}
//                       </Typography>
//                       <Typography variant="body1" style={{ marginBottom: "0.5rem" }}>
//                         <strong>Fees:</strong> {course.fees}
//                       </Typography>
//                       <Typography variant="body1" style={{ marginBottom: "0.5rem" }}>
//                         <strong>No. of Seats:</strong> {course.noOfSeats}
//                       </Typography>
//                       <div style={{ textAlign: "center" }}>
//                         <Button
//                           onClick={() => handleEnroll()}
//                           // onClick={() => handleEditCourse(course.courseId)}
//                           variant="contained"
//                           color="primary"
//                           style={{
//                             backgroundColor: "orange",
//                             marginTop: "1rem",
//                             marginRight: "0.5rem",
//                           }}
//                         >
//                           Enroll
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//           </Grid>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
      
//       <Dialog open={showApplicationForm} onClose={handleCloseApplicationForm} maxWidth="md">
//         <DialogTitle>Application Form</DialogTitle>
//         <DialogContent>
//           <Container>
//             <Typography variant="h1" gutterBottom>
//               Application Form
//             </Typography>
//             <form onSubmit={handleSubmit}>
//               <Grid container spacing={3}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     name="insid"
//                     label="Enter the institute ID for Confirmation"
//                     value={formData.insid}
//                     onChange={handleChange}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     name="applicationId"
//                     label="Enter your Application ID"
//                     value={formData.applicationId}
//                     onChange={handleChange}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     name="studentName"
//                     label="Student Name"
//                     value={formData.studentName}
//                     onChange={handleChange}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     name="studentMail"
//                     label="Student Email"
//                     value={formData.studentMail}
//                     onChange={handleChange}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     name="studentPhoneNumber"
//                     label="Student Phone Number"
//                     value={formData.studentPhoneNumber}
//                     onChange={handleChange}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     name="twelfthMarks"
//                     label="Twelfth Marks"
//                     value={formData.twelfthMarks}
//                     onChange={handleChange}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     name="aadharNumber"
//                     label="Aadhar Number"
//                     value={formData.aadharNumber}
//                     onChange={handleChange}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     name="courseName"
//                     label="Course Name"
//                     value={formData.courseName}
//                     onChange={handleChange}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     name="courseCode"
//                     label="Course Code"
//                     value={formData.courseCode}
//                     onChange={handleChange}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     name="collegeName"
//                     label="College Name"
//                     value={formData.collegeName}
//                     onChange={handleChange}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     name="location"
//                     label="Location"
//                     value={formData.location}
//                     onChange={handleChange}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Button type="submit" variant="contained" color="primary">
//                     Submit
//                   </Button>
//                 </Grid>
//               </Grid>
//             </form>
//           </Container>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseApplicationForm} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default InstitutesPage;
