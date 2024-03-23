
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Typography, Button, Paper, makeStyles, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginTop: theme.spacing(2),
//   },
//   article: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginBottom: theme.spacing(2),
//     padding: theme.spacing(2),
//     cursor: 'pointer',
//   },
// }));

// const EditApplicationForm = () => {
//   const classes = useStyles();
//   const [applicationsData, setApplicationsData] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [selectedApplication, setSelectedApplication] = useState(null);
//   const [openDialog, setOpenDialog] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:2020/api/users');
//         setApplicationsData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleUserClick = (user) => {
//     setSelectedUser(user);
//   };

//   const handleApplicationClick = (application) => {
//     setSelectedApplication(application);
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   const handleTakeDecision = () => {
//     // Handle decision logic here
//     console.log('Taking decision for application:', selectedApplication);
//     setOpenDialog(false);
//   };

//   return (
//     <Container className={classes.root}>
//       <Typography variant="h4" gutterBottom>
//         Applications
//       </Typography>
//       {applicationsData.map((user, index) => (
//         <Paper key={index} className={classes.article} onClick={() => handleUserClick(user)}>
//           <div>
//             <Typography variant="h6">{user.username}</Typography>
//             <Typography variant="subtitle1">{user.email}</Typography>
//           </div>
//         </Paper>
//       ))}
//       {selectedUser && (
//         <div>
//           <Typography variant="h5" gutterBottom>
//             User Details
//           </Typography>
//           <Typography variant="h6">{selectedUser.username}</Typography>
//           <Typography variant="subtitle1">{selectedUser.email}</Typography>
//           <Typography variant="subtitle1">{selectedUser.mobileNumber}</Typography>
//           <Typography variant="subtitle1">{selectedUser.userRole}</Typography>
//           {/* Add more user details as needed */}
//           <Button variant="outlined" onClick={() => handleApplicationClick(selectedUser.enrollments[0])}>See Application</Button>
//         </div>
//       )}
//       <Dialog open={openDialog} onClose={handleCloseDialog}>
//         <DialogTitle>Application Details</DialogTitle>
//         <DialogContent>
//           <Typography variant="h6">{selectedApplication?.collegeName}</Typography>
//           <Typography variant="subtitle1">Location: {selectedApplication?.studentName}</Typography>
//           <Typography variant="subtitle1">Course: {selectedApplication?.studentMail}</Typography>
//           <Typography variant="subtitle1">Course: {selectedApplication?.collegeName}</Typography>
//           <Typography variant="subtitle1">Course: {selectedApplication?.courseName}</Typography>
//           <Typography variant="subtitle1">Course: {selectedApplication?.location}</Typography>
//           <Typography variant="subtitle1">Course: {selectedApplication?.studentPhoneNumber}</Typography>
//           <Typography variant="subtitle1">Course: {selectedApplication?.twelfthMarks}</Typography>
//           <Typography variant="subtitle1">Course: {selectedApplication?.aadharNumber}</Typography>
//           {/* Add more application details as needed */}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleTakeDecision} color="primary">
//             Take Decision
//           </Button>
//           <Button onClick={handleCloseDialog} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default EditApplicationForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Typography, Button, Paper, makeStyles, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
// import { Link } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginTop: theme.spacing(2),
//   },
//   article: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginBottom: theme.spacing(2),
//     padding: theme.spacing(2),
//     cursor: 'pointer',
//   },
// }));

// const EditApplicationForm = () => {
//   const classes = useStyles();
//   const [applicationsData, setApplicationsData] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [selectedApplication, setSelectedApplication] = useState(null);
//   const [openUserDialog, setOpenUserDialog] = useState(false);
//   const [openApplicationDialog, setOpenApplicationDialog] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:2020/api/users');
//         console.log(response.data);
//         setApplicationsData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleUserClick = (user) => {
//     setSelectedUser(user);
//     setOpenUserDialog(true);
//   };

//   const handleApplicationClick = (application) => {
//     setSelectedApplication(application);
//     setOpenApplicationDialog(true);
//   };

//   const handleCloseUserDialog = () => {
//     setOpenUserDialog(false);
//   };

//   const handleCloseApplicationDialog = () => {
//     setOpenApplicationDialog(false);
//   };

//   const handleTakeDecision = () => {
//     // Handle decision logic here
//     console.log('Taking decision for application:', selectedApplication);
//     setOpenApplicationDialog(false);
//   };

//   return (
//     <Container className={classes.root}>
//       <Typography variant="h4" gutterBottom>
//         Applications
//       </Typography>
//       {applicationsData.map((user, index) => (
//         <Paper key={index} className={classes.article} onClick={() => handleUserClick(user)}>
//           <div>
//             <Typography variant="h6">{user.username}</Typography>
//             <Typography variant="subtitle1">{user.email}</Typography>
//           </div>
//         </Paper>
//       ))}
//       <Dialog open={openUserDialog} onClose={handleCloseUserDialog}>
//         <DialogTitle>User Details</DialogTitle>
//         <DialogContent>
//           <Typography variant="h6">{selectedUser?.username}</Typography>
//           <Typography variant="subtitle1">{selectedUser?.email}</Typography>
//           <Typography variant="subtitle1">{selectedUser?.mobileNumber}</Typography>
//           <Typography variant="subtitle1">{selectedUser?.userRole}</Typography>
//           {/* Add more user details as needed */}
//           <Button variant="outlined" onClick={() => handleApplicationClick(selectedUser?.enrollments[0])}>See Application</Button>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseUserDialog} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//       <Dialog open={openApplicationDialog} onClose={handleCloseApplicationDialog}>
//         <DialogTitle>Application Details</DialogTitle>
//         <DialogContent>
//           <Typography variant="h6">editing ID: {selectedApplication?.id}</Typography>
//           <Typography variant="h6">Application ID: {selectedApplication?.applicationId}</Typography>
//           <Typography variant="subtitle1">Student Name: {selectedApplication?.studentName}</Typography>
//           <Typography variant="subtitle1">Student Mail: {selectedApplication?.studentMail}</Typography>
//           <Typography variant="subtitle1">College Name: {selectedApplication?.collegeName}</Typography>
//           <Typography variant="subtitle1">Location: {selectedApplication?.location}</Typography>
//           <Typography variant="subtitle1">Student Phone Number: {selectedApplication?.studentPhoneNumber}</Typography>
//           <Typography variant="subtitle1">Twelfth Marks: {selectedApplication?.twelfthMarks}</Typography>
//           <Typography variant="subtitle1">Aadhar Number: {selectedApplication?.aadharNumber}</Typography>
//           {/* Add more application details as needed */}
//         </DialogContent>
//         <DialogActions>
//           <Link to = '/admin/updateapplicationform'><Button onClick={handleTakeDecision} color="primary">
//             Take Decision
//           </Button></Link>
//           <Button onClick={handleCloseApplicationDialog} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default EditApplicationForm;




























































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Typography, Button, Paper, makeStyles, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
// import { Link } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginTop: theme.spacing(2),
//   },
//   article: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginBottom: theme.spacing(2),
//     padding: theme.spacing(2),
//     cursor: 'pointer',
//   },
// }));

// const EditApplicationForm = () => {
//   const classes = useStyles();
//   const [applicationsData, setApplicationsData] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [selectedApplications, setSelectedApplications] = useState([]);
//   const [openApplicationDialog, setOpenApplicationDialog] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:2020/api/users');
//         console.log(response.data);
//         setApplicationsData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleUserClick = (user) => {
//     setSelectedUser(user);
//     setOpenApplicationDialog(true);
//     setSelectedApplications(user.enrollments);
//   };

//   const handleCloseApplicationDialog = () => {
//     setOpenApplicationDialog(false);
//     setSelectedUser(null);
//     setSelectedApplications([]);
//   };

//   const handleTakeDecision = (applicationId) => {
//     // Handle decision logic here
//     console.log('Taking decision for application:', applicationId);
//     setOpenApplicationDialog(false);
//   };

//   return (
//     <Container className={classes.root}>
//       <Typography variant="h4" gutterBottom>
//         Applications
//       </Typography>
//       {applicationsData.map((user, index) => (
//         <Paper key={index} className={classes.article} onClick={() => handleUserClick(user)}>
//           <div>
//             <Typography variant="h6">{user.username}</Typography>
//             <Typography variant="subtitle1">{user.email}</Typography>
//           </div>
//         </Paper>
//       ))}
//       <Dialog open={openApplicationDialog} onClose={handleCloseApplicationDialog}>
//         <DialogTitle>User Applications</DialogTitle>
//         <DialogContent>
//           {selectedApplications.map((application, index) => (
//             <div key={index}>
//               <Typography variant="h6">Editing ID: {application.id}</Typography>
//               <Typography variant="h6">Application ID: {application.applicationId}</Typography>
//               <Typography variant="subtitle1">Student Name: {application.studentName}</Typography>
//               <Typography variant="subtitle1">Student Mail: {application.studentMail}</Typography>
//               <Typography variant="subtitle1">College Name: {application.collegeName}</Typography>
//               <Typography variant="subtitle1">Location: {application.location}</Typography>
//               <Typography variant="subtitle1">Student Phone Number: {application.studentPhoneNumber}</Typography>
//               <Typography variant="subtitle1">Twelfth Marks: {application.twelfthMarks}</Typography>
//               <Typography variant="subtitle1">Aadhar Number: {application.aadharNumber}</Typography>
//               {/* Add more application details as needed */}
//               <Button onClick={() => handleTakeDecision(application.applicationId)} color="primary">
//                 Take Decision
//               </Button>
//             </div>
//           ))}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseApplicationDialog} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default EditApplicationForm;








import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Paper, makeStyles, Dialog, DialogTitle, DialogContent, DialogActions, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  article: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    cursor: 'pointer',
  },
  applicationDetails: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const EditApplicationForm = () => {
  const classes = useStyles();
  const [applicationsData, setApplicationsData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedApplications, setSelectedApplications] = useState([]);
  const [openApplicationDialog, setOpenApplicationDialog] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:2020/api/users');
        console.log(response.data);
        setApplicationsData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setOpenApplicationDialog(true);
    setSelectedApplications(user.enrollments);
  };

  const handleCloseApplicationDialog = () => {
    setOpenApplicationDialog(false);
    setSelectedUser(null);
    setSelectedApplications([]);
  };

  const handleTakeDecision = (applicationId) => {
    // Handle decision logic here
    console.log('Taking decision for application:', applicationId);
    setOpenApplicationDialog(false);
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Applications
      </Typography>
      {applicationsData.map((user, index) => (
        <Paper key={index} className={classes.article} onClick={() => handleUserClick(user)}>
          <div>
            <Typography variant="h6">{user.username}</Typography>
            <Typography variant="subtitle1">{user.email}</Typography>
          </div>
        </Paper>
      ))}
      <Dialog open={openApplicationDialog} onClose={handleCloseApplicationDialog}>
        <DialogTitle>User Applications</DialogTitle>
        <DialogContent>
          {selectedApplications.map((application, index) => (
            <Paper key={index} className={classes.applicationDetails}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6">Editing ID: {application.id}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Application ID: {application.applicationId}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">Student Name: {application.studentName}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">Student Mail: {application.studentMail}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">College Name: {application.collegeName}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">Location: {application.location}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">Student Phone Number: {application.studentPhoneNumber}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">Twelfth Marks: {application.twelfthMarks}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">Aadhar Number: {application.aadharNumber}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">Payment Status: {application.payment}</Typography>
                </Grid>
                <Grid item xs={12}>
                <Link to = '/admin/updateapplicationform'><Button onClick={() => handleTakeDecision(application.applicationId)} color="primary">
                    Take Decision
                  </Button></Link>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseApplicationDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default EditApplicationForm;
