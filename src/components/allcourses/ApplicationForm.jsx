import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    applicationId: "",
    studentName: "",
    studentMail: "",
    studentPhoneNumber: "",
    twelfthMarks: "",
    aadharNumber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any action you want with the form data here
    console.log(formData);
  };

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Application Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="applicationId"
              label="Application ID"
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
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ApplicationForm;
