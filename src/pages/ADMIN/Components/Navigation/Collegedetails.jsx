import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';
import axios from 'axios';

const AdminPage = () => {
  const [college, setCollege] = useState({
    instituteName: '',
    instituteDescription: '',
    instituteAddress: '',
    mobile: '',
    email: '',
    noOfCoursesAvailable: 0,
    imageUrl: '',
    profileUrl: '',
    founder: '',
    starnumber: 0,
    avgfee: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCollege({
      ...college,
      [name]: value
    });
  };

  const handleAddCollege = (e) => {
    e.preventDefault();
    if (
      college.instituteName.trim() !== '' &&
      college.instituteDescription.trim() !== '' &&
      college.instituteAddress.trim() !== '' &&
      college.mobile.trim() !== '' &&
      college.email.trim() !== '' &&
      college.noOfCoursesAvailable !== 0
    ) {
      axios.post('http://localhost:2020/api/institutes', college)
        .then(response => {
          console.log('College added:', response.data);
          // Reset college state after successful submission
          setCollege({
            instituteName: '',
            instituteDescription: '',
            instituteAddress: '',
            mobile: '',
            email: '',
            noOfCoursesAvailable: 0,
            imageUrl: '',
            profileUrl: '',
            founder: '',
            starnumber: 0,
            avgfee: 0
          });
        })
        .catch(error => {
          console.error('Error adding college:', error);
        });
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: 20 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Admin Page
          </Typography>
          <form onSubmit={handleAddCollege}>
            <TextField
              label="Institute Name"
              name="instituteName"
              value={college.instituteName}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              label="Institute Description"
              name="instituteDescription"
              value={college.instituteDescription}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              label="Institute Address"
              name="instituteAddress"
              value={college.instituteAddress}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              label="Mobile"
              name="mobile"
              value={college.mobile}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              label="Email"
              name="email"
              value={college.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              label="Number of Courses Available"
              name="noOfCoursesAvailable"
              value={college.noOfCoursesAvailable}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
              type="number"
            />
            <TextField
              label="Image URL"
              name="imageUrl"
              value={college.imageUrl}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Profile URL"
              name="profileUrl"
              value={college.profileUrl}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Founder"
              name="founder"
              value={college.founder}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Star Number"
              name="starnumber"
              value={college.starnumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              type="number"
            />
            <TextField
              label="Average Fee"
              name="avgfee"
              value={college.avgfee}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              type="number"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add College
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AdminPage;

// import React, { useState } from 'react';
// import { TextField, Button, Grid, Typography, Paper } from '@mui/material';
// import axios from 'axios';

// const AdminPage = () => {
//   const [college, setCollege] = useState({
//     instituteName: '',
//     instituteDescription: '',
//     instituteAddress: '',
//     mobile: '',
//     email: '',
//     noOfCoursesAvailable: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCollege({
//       ...college,
//       [name]: value
//     });
//   };

//   const handleAddCollege = (e) => {
//     e.preventDefault();
//     if (
//       college.instituteName.trim() !== '' &&
//       college.instituteDescription.trim() !== '' &&
//       college.instituteAddress.trim() !== '' &&
//       college.mobile.trim() !== '' &&
//       college.email.trim() !== '' &&
//       college.noOfCoursesAvailable.trim() !== ''
//     ) {
//       // Here you can send the college data to your backend or perform any other action
//       axios.post('http://localhost:2020/api/institutes', college)
//         .then(response => {
//           console.log('College added:', response.data);
//           // Reset college state after successful submission
//           setCollege({
//             instituteName: '',
//             instituteDescription: '',
//             instituteAddress: '',
//             mobile: '',
//             email: '',
//             noOfCoursesAvailable: ''
//           });
//         })
//         .catch(error => {
//           console.error('Error adding college:', error);
//         });
//     }
//   };

//   return (
//     <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
//       <Grid item xs={10} sm={8} md={6} lg={4}>
//         <Paper elevation={3} style={{ padding: 20 }}>
//           <Typography variant="h4" align="center" gutterBottom>
//             Admin Page
//           </Typography>
//           <form onSubmit={handleAddCollege}>
//             <TextField
//               label="Institute Name"
//               name="instituteName"
//               value={college.instituteName}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               variant="outlined"
//               required
//             />
//             <TextField
//               label="Institute Description"
//               name="instituteDescription"
//               value={college.instituteDescription}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               variant="outlined"
//               required
//             />
//             <TextField
//               label="Institute Address"
//               name="instituteAddress"
//               value={college.instituteAddress}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               variant="outlined"
//               required
//             />
//             <TextField
//               label="Mobile"
//               name="mobile"
//               value={college.mobile}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               variant="outlined"
//               required
//             />
//             <TextField
//               label="Email"
//               name="email"
//               value={college.email}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               variant="outlined"
//               required
//             />
//             <TextField
//               label="Number of Courses Available"
//               name="noOfCoursesAvailable"
//               value={college.noOfCoursesAvailable}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               variant="outlined"
//               required
//             />
//             <Button type="submit" variant="contained" color="primary" fullWidth>
//               Add College
//             </Button>
//           </form>
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// };

// export default AdminPage;