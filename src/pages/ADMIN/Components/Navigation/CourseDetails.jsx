import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, TextField, Button, Typography, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(4),
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '12px',
    },
    submitButton: {
      marginTop: theme.spacing(2),
    },
  }));
  
  const AddCoursePage = () => {
    const classes = useStyles();
  
    const [courseDetails, setCourseDetails] = useState({
      collegeId: '',
      courseName: '',
      courseDescription: '',
      courseDuration: '',
      fees: 0,
      noOfSeats: 0,
    });
    const [feedback, setFeedback] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCourseDetails({ ...courseDetails, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:2020/api/courses/' + courseDetails.collegeId, courseDetails);
        
        // Assuming your backend returns a success message
        setFeedback(response.data.message);
        setOpenSnackbar(true);
        
        // Optionally, you can clear the form fields after successful submission
        setCourseDetails({
          collegeId: '',
          courseName: '',
          courseDescription: '',
          courseDuration: '',
          fees: 0,
          noOfSeats: 0,
        });
      } catch (error) {
        // Handle errors, such as network issues or server errors
        console.error('Error adding course:', error);
        // Display an error message to the user
        setFeedback('Failed to add course. Please try again later.');
        setOpenSnackbar(true);
      }
    };
  
    const handleCloseSnackbar = () => {
      setOpenSnackbar(false);
    };

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Add Course
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="College ID"
                name="collegeId"
                value={courseDetails.collegeId}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Course Name"
                name="courseName"
                value={courseDetails.courseName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Course Description"
                name="courseDescription"
                value={courseDetails.courseDescription}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Course Duration"
                name="courseDuration"
                value={courseDetails.courseDuration}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Fees"
                type="number"
                name="fees"
                value={courseDetails.fees}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Number of Seats"
                type="number"
                name="noOfSeats"
                value={courseDetails.noOfSeats}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                className={classes.submitButton}
              >
                Add Course
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity="success">
          {feedback}
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default AddCoursePage;
