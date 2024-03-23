// import React, { useState, useEffect } from "react";
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
// } from "@material-ui/core";

// const InstitutesPage = () => {
//   const [institutes, setInstitutes] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState(null);
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
//     alert("Enroll button clicked");
//   };
  
//   const handleEdit = () => {
//     navigate("/admin/editcourses");
//   };

//   const handleDel = async (courseId) => {
//     try {
//       console.log(courseId);
//       await axios.delete(`http://localhost:2020/api/courses/${courseId}`);
//       alert("Course deleted successfully");
//       // You can update the UI or perform any other action upon successful deletion
//     } catch (error) {
//       console.error("Error deleting course:", error);
//       alert("Failed to delete course");
//       // Handle error appropriately
//     }
//   };

//   const handleClose = () => {
//     setSelectedCourse(null);
//   };

//   return (
//     <Container>
//       <Typography variant="h1" gutterBottom>
//         List of Institutes
//       </Typography>
//       <Grid container spacing={3}>
//         {institutes.map((institute) => (
//           <Grid item xs={12} key={institute.instituteId}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h2">Institute {institute.instituteId} Details</Typography>
//                 <Typography variant="body1">
//                   <strong>Name:</strong> {institute.instituteName}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Description:</strong> {institute.instituteDescription}
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
//                   style={{ backgroundColor: "#98FB98", marginRight: "1rem" }}
//                 >
//                   See Course
//                 </Button>
//                 <Button
//                   onClick={() => handleSeeCourse(institute.courses)}
//                   variant="contained"
//                   style={{ backgroundColor: "orange", marginRight: "1rem" }}
//                 >
//                   Edit College Details
//                 </Button>
//                 <Button
//                   onClick={() => handleDel(institute.instituteId, institute.courseId)}
//                   variant="contained"
//                   style={{ backgroundColor: "red", marginRight: "1rem" }}
//                 >
//                   Delete College
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
//                     <CardContent style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
//                       <Typography variant="h3" style={{ marginBottom: "0.5rem" }}>{course.courseName}</Typography>
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
//                           onClick={handleEdit}
//                           variant="contained"
//                           color="primary"
//                           style={{ backgroundColor: "orange", marginTop: "1rem", marginRight: "0.5rem" }}
//                         >
//                           Edit
//                         </Button>
//                         <Button
//                           onClick={() => handleDel(course.courseId)}
//                           variant="contained"
//                           color="primary"
//                           style={{ backgroundColor: "red", marginTop: "1rem" }}
//                         >
//                           Delete
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
//     </Container>
//   );
// };

// export default InstitutesPage;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

const InstitutesPage = () => {
  const [institutes, setInstitutes] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:2020/api/institutes");
      setInstitutes(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSeeCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleEnroll = () => {
    alert("Enroll button clicked");
  };
  
  const handleEdit = () => {
    navigate("/admin/editcourses");
  };
  const handleclgedit = () => {
    navigate("/admin/editclg");
  };

  const handleDel = async (courseId) => {
    try {
      console.log(courseId);
      await axios.delete(`http://localhost:2020/api/courses/${courseId}`);
      alert("Course deleted successfully");
      // You can update the UI or perform any other action upon successful deletion
    } catch (error) {
      console.error("Error deleting course:", error);
      alert("Failed to delete course");
      // Handle error appropriately
    }
  };
  const handleDelclg = async (instituteId) => {
    try {
      console.log(instituteId);
      await fetch(`http://localhost:2020/api/institutes/${instituteId}`, {
        method: 'DELETE',
      });
      alert("College deleted successfully");
      location.reload();
      // You can update the UI or perform any other action upon successful deletion
    } catch (error) {
      console.error("Error deleting college:", error);
      alert("Failed to delete college");
      // Handle error appropriately
    }
  };

  const handleClose = () => {
    setSelectedCourse(null);
  };

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        List of Institutes
      </Typography>
      <Grid container spacing={3}>
        {institutes.map((institute) => (
          <Grid item xs={12} key={institute.instituteId}>
            <Card>
              <CardContent>
                <Typography variant="h2">Institute {institute.instituteId} Details</Typography>
                <Typography variant="body1">
                  <strong>Name:</strong> {institute.instituteName}
                </Typography>
                <Typography variant="body1">
                  <strong>Description:</strong> {institute.instituteDescription}
                </Typography>
                <Typography variant="body1">
                  <strong>Address:</strong> {institute.instituteAddress}
                </Typography>
                <Typography variant="body1">
                  <strong>Mobile:</strong> {institute.mobile}
                </Typography>
                <Typography variant="body1">
                  <strong>Email:</strong> {institute.email}
                </Typography>
                <Typography variant="body1">
                  <strong>No. of Courses Available:</strong>{" "}
                  {institute.noOfCoursesAvailable}
                </Typography>
                <Button
                  onClick={() => handleSeeCourse(institute.courses)}
                  variant="contained"
                  style={{ backgroundColor: "#98FB98", marginRight: "1rem" }}
                >
                  See Course
                </Button>
                <Button
                  onClick={() => handleclgedit()}
                  variant="contained"
                  style={{ backgroundColor: "orange", marginRight: "1rem" }}
                >
                  Edit College Details
                </Button>
                <Button
                  onClick={() => handleDelclg(institute.instituteId)}
                  variant="contained"
                  style={{ backgroundColor: "red", marginRight: "1rem" }}
                >
                  Delete College
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={selectedCourse !== null} onClose={handleClose} maxWidth="md">
        <DialogTitle>Course Details</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            {selectedCourse &&
              selectedCourse.map((course) => (
                <Grid item xs={12} sm={6} md={4} key={course.courseId}>
                  <Card>
                    <CardContent style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
                      <Typography variant="h3" style={{ marginBottom: "0.5rem" }}>{course.courseName}</Typography>
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
                          onClick={handleEdit}
                          variant="contained"
                          color="primary"
                          style={{ backgroundColor: "orange", marginTop: "1rem", marginRight: "0.5rem" }}
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => handleDel(course.courseId)}
                          variant="contained"
                          color="primary"
                          style={{ backgroundColor: "red", marginTop: "1rem" }}
                        >
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default InstitutesPage;
