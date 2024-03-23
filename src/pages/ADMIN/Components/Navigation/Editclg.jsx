import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import axios from 'axios';

const EditCollegeForm = () => {
  const [instituteId, setInstituteId] = useState('');
  const [collegeData, setCollegeData] = useState({
    instituteName: '',
    instituteDescription: '',
    instituteAddress: '',
    mobile: '',
    email: '',
    noOfCoursesAvailable: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCollegeData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:2020/api/institutes/${instituteId}`, collegeData)
      .then(response => {
        console.log('College details updated successfully:', response.data);
      })
      .catch(error => {
        console.error('Error updating college details:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Institute ID"
            name="instituteId"
            value={instituteId}
            onChange={(e) => setInstituteId(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Institute Name"
            name="instituteName"
            value={collegeData.instituteName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Institute Description"
            name="instituteDescription"
            value={collegeData.instituteDescription}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Institute Address"
            name="instituteAddress"
            value={collegeData.instituteAddress}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Mobile"
            name="mobile"
            value={collegeData.mobile}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={collegeData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="No. of Courses Available"
            name="noOfCoursesAvailable"
            value={collegeData.noOfCoursesAvailable}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Update
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditCollegeForm;
