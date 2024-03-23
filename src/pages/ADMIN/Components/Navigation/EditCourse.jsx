// import React, { useState } from "react";
// import axios from "axios";
// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Grid,
// } from "@material-ui/core";

// const UpdateCoursePage = () => {
//   const [courseData, setCourseData] = useState({
//     courseName: "",
//     courseDescription: "",
//     courseDuration: "",
//     fees: 0,
//     noOfSeats: 0,
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setCourseData({ ...courseData, [name]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.put(
//         `http://localhost:2020/api/institutes/${instituteId}/courses/${courseId}`,
//         courseData
//       );
//       console.log("Course updated:", response.data);
//       // Add any additional actions after successful course update
//     } catch (error) {
//       console.error("Error updating course:", error);
//     }
//   };

//   return (
//     <Container>
//       <Typography variant="h1" gutterBottom>
//         Update Course
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               name="courseName"
//               label="Course Name"
//               value={courseData.courseName}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               name="courseDescription"
//               label="Course Description"
//               value={courseData.courseDescription}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               name="courseDuration"
//               label="Course Duration"
//               value={courseData.courseDuration}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               name="fees"
//               type="number"
//               label="Fees"
//               value={courseData.fees}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               name="noOfSeats"
//               type="number"
//               label="No. of Seats"
//               value={courseData.noOfSeats}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button type="submit" variant="contained" color="primary">
//               Update Course
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };

// export default UpdateCoursePage;
import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";

const UpdateCoursePage = () => {
  const [courseData, setCourseData] = useState({
    courseName: "",
    courseDescription: "",
    courseDuration: "",
    fees: 0,
    noOfSeats: 0,
  });

  const [instituteId, setInstituteId] = useState("");
  const [courseId, setCourseId] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleInstituteIdChange = (event) => {
    setInstituteId(event.target.value);
  };

  const handleCourseIdChange = (event) => {
    setCourseId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:2020/api/institutes/${instituteId}/courses/${courseId}`,
        courseData
      );
      console.log("Course updated:", response.data);
      // Add any additional actions after successful course update
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Update Course
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="instituteId"
              label="Institute ID"
              value={instituteId}
              onChange={handleInstituteIdChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="courseId"
              label="Course ID"
              value={courseId}
              onChange={handleCourseIdChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="courseName"
              label="Course Name"
              value={courseData.courseName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="courseDescription"
              label="Course Description"
              value={courseData.courseDescription}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="courseDuration"
              label="Course Duration"
              value={courseData.courseDuration}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="fees"
              type="number"
              label="Fees"
              value={courseData.fees}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="noOfSeats"
              type="number"
              label="No. of Seats"
              value={courseData.noOfSeats}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Update Course
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default UpdateCoursePage;
